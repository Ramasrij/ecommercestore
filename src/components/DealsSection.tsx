import { motion } from "framer-motion";
import { Clock, ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";
// import { useRouter } from "next/router";

import { useNavigate } from "react-router-dom";


const deals = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    originalPrice: 399,
    salePrice: 199,
    discount: 50,
    image: "🎧",
    endTime: new Date(Date.now() + 12 * 60 * 60 * 1000),
  },
  {
    id: 2,
    name: "Smart Watch Pro Max",
    originalPrice: 599,
    salePrice: 349,
    discount: 42,
    image: "⌚",
    endTime: new Date(Date.now() + 8 * 60 * 60 * 1000),
  },
  {
    id: 3,
    name: "Designer Sneakers",
    originalPrice: 289,
    salePrice: 145,
    discount: 50,
    image: "👟",
    endTime: new Date(Date.now() + 24 * 60 * 60 * 1000),
  },
];

const CountdownTimer = ({ endTime }: { endTime: Date }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endTime]);

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-primary" />
      <div className="flex items-center gap-1 text-sm font-mono">
        <span className="bg-foreground text-background px-2 py-1 rounded">
          {String(timeLeft.hours).padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-foreground text-background px-2 py-1 rounded">
          {String(timeLeft.minutes).padStart(2, "0")}
        </span>
        <span>:</span>
        <span className="bg-foreground text-background px-2 py-1 rounded">
          {String(timeLeft.seconds).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
};

export const DealsSection = () => {
   const navigate = useNavigate();
  return (
    <section id="deals" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12"
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4" />
              Flash Deals
            </div>
            <h2 className="section-title">Today's Hot Deals</h2>
            <p className="section-subtitle">
              Limited time offers on premium products. Don't miss out!
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Deals <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {deals.map((deal, index) => (
            <motion.div
              key={deal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card rounded-3xl overflow-hidden group card-hover"
            >
              {/* Discount Badge */}
              <div className="absolute top-4 left-4 z-10 bg-destructive text-destructive-foreground px-3 py-1.5 rounded-full text-sm font-bold">
                -{deal.discount}%
              </div>

              {/* Image */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center justify-center">
                <span className="text-8xl md:text-9xl transform group-hover:scale-110 transition-transform duration-500">
                  {deal.image}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <CountdownTimer endTime={deal.endTime} />

                <h3 className="font-semibold text-lg text-foreground">
                  {deal.name}
                </h3>

                <div className="flex items-center gap-3">
                  <span className="text-2xl font-bold text-primary">
                    ${deal.salePrice}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${deal.originalPrice}
                  </span>
                </div>

          <button
            className="w-full py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:opacity-90 transition-opacity"
            //  onClick={() => navigate(`/checkout/${deal.id}`)}
           onClick={() =>   navigate(
    `/checkout/${deal.id}?price=${deal.salePrice}&original=${deal.originalPrice}`
  )}
            >
            Grab This Deal
          </button>
          </div>
            </motion.div>
          ))}
        </div>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 relative rounded-3xl overflow-hidden bg-gradient-to-r from-primary to-accent p-8 md:p-12"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-bold text-primary-foreground mb-2">
                Get Extra 20% Off
              </h3>
              <p className="text-primary-foreground/80 text-lg">
                Use code <span className="font-bold">SAVE20</span> at checkout
              </p>
            </div>
            <button className="px-8 py-4 bg-background text-foreground rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};
