import { motion } from "framer-motion";
import { Send, Gift, Bell, Percent } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest deals and updates.",
      });
      setEmail("");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 p-8 md:p-16 overflow-hidden"
        >
          {/* Background Decorations */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto"
            >
              <Send className="w-10 h-10 text-primary" />
            </motion.div>

            {/* Header */}
            <div className="space-y-4">
              <h2 className="section-title">Stay in the Loop</h2>
              <p className="section-subtitle mx-auto">
                Subscribe to our newsletter and be the first to know about exclusive deals, new arrivals, and more!
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { icon: Gift, text: "Exclusive Offers" },
                { icon: Bell, text: "New Arrivals Alert" },
                { icon: Percent, text: "Member Discounts" },
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <benefit.icon className="w-5 h-5 text-primary" />
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-full bg-card border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                required
              />
              <button
                type="submit"
                className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Subscribe
                <Send className="w-4 h-4" />
              </button>
            </form>

            <p className="text-sm text-muted-foreground">
              No spam, unsubscribe anytime. By subscribing you agree to our Privacy Policy.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
