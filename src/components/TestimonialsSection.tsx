import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Fashion Enthusiast",
    avatar: "👩‍💼",
    rating: 5,
    text: "Absolutely love shopping here! The quality of products exceeded my expectations, and the delivery was super fast. Highly recommend!",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Tech Reviewer",
    avatar: "👨‍💻",
    rating: 5,
    text: "Best e-commerce experience I've had. The product descriptions are accurate, prices are fair, and customer service is exceptional.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lifestyle Blogger",
    avatar: "👩‍🎨",
    rating: 5,
    text: "I've been a loyal customer for over a year now. The variety of products and constant deals keep me coming back for more!",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <span className="text-primary font-semibold">Testimonials</span>
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-card p-8 rounded-3xl card-hover"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-primary/20">
                <Quote className="w-12 h-12" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-8 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "50K+", label: "Happy Customers" },
            { value: "10K+", label: "Products Sold" },
            { value: "4.9", label: "Average Rating" },
            { value: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-2xl">
              <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">{stat.value}</p>
              <p className="text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
