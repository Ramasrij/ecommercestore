import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Electronics",
    itemCount: 245,
    image: "📱",
    color: "from-blue-500/20 to-purple-500/20",
  },
  {
    id: 2,
    name: "Fashion",
    itemCount: 512,
    image: "👔",
    color: "from-pink-500/20 to-rose-500/20",
  },
  {
    id: 3,
    name: "Accessories",
    itemCount: 189,
    image: "⌚",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: 4,
    name: "Footwear",
    itemCount: 324,
    image: "👟",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    id: 5,
    name: "Bags",
    itemCount: 156,
    image: "🎒",
    color: "from-cyan-500/20 to-teal-500/20",
  },
  {
    id: 6,
    name: "Home & Living",
    itemCount: 278,
    image: "🏠",
    color: "from-violet-500/20 to-indigo-500/20",
  },
];

export const CategoriesSection = () => {
  return (
    <section id="categories" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <span className="text-primary font-semibold">Categories</span>
          <h2 className="section-title">Shop by Category</h2>
          <p className="section-subtitle mx-auto">
            Browse through our diverse range of categories to find exactly what you're looking for.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-square rounded-3xl bg-gradient-to-br ${category.color} p-6 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg overflow-hidden`}>
                {/* Background Decoration */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
                </div>

                <span className="text-5xl md:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.image}
                </span>
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {category.name}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {category.itemCount} items
                </p>

                {/* Hover Arrow */}
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                  <ArrowRight className="w-4 h-4 text-background" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
