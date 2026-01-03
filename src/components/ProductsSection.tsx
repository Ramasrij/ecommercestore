import { motion } from "framer-motion";
import { Heart, ShoppingBag, Star, Eye } from "lucide-react";
import { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import { useToast } from "@/components/ui/use-toast";


const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    originalPrice: 399,
    rating: 4.8,
    reviews: 128,
    image: "🎧",
    badge: "sale",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Designer Leather Watch",
    price: 189,
    originalPrice: null,
    rating: 4.9,
    reviews: 256,
    image: "⌚",
    badge: "new",
    category: "Accessories",
  },
  {
    id: 3,
    name: "Minimal Sneakers",
    price: 149,
    originalPrice: 199,
    rating: 4.7,
    reviews: 89,
    image: "👟",
    badge: "sale",
    category: "Footwear",
  },
  {
    id: 4,
    name: "Smart Fitness Tracker",
    price: 129,
    originalPrice: null,
    rating: 4.6,
    reviews: 312,
    image: "📱",
    badge: null,
    category: "Electronics",
  },
  {
    id: 5,
    name: "Premium Sunglasses",
    price: 179,
    originalPrice: 229,
    rating: 4.8,
    reviews: 167,
    image: "🕶️",
    badge: "sale",
    category: "Accessories",
  },
  {
    id: 6,
    name: "Leather Backpack",
    price: 259,
    originalPrice: null,
    rating: 4.9,
    reviews: 203,
    image: "🎒",
    badge: "new",
    category: "Bags",
  },
  {
    id: 7,
    name: "Wireless Earbuds Pro",
    price: 199,
    originalPrice: 249,
    rating: 4.7,
    reviews: 445,
    image: "🎵",
    badge: "sale",
    category: "Electronics",
  },
  {
    id: 8,
    name: "Classic Denim Jacket",
    price: 129,
    originalPrice: null,
    rating: 4.5,
    reviews: 178,
    image: "🧥",
    badge: null,
    category: "Clothing",
  },
];

const categories = ["All", "Electronics", "Accessories", "Footwear", "Bags", "Clothing"];

export const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  // const [wishlist, setWishlist] = useState<number[]>([]);
const { wishlist, toggleWishlist } = useWishlist();
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(p => p.category === activeCategory);
const { toast } = useToast();


const { addToCart } = useCart();

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <span className="text-primary font-semibold">Our Products</span>
          <h2 className="section-title">Featured Collection</h2>
          <p className="section-subtitle mx-auto">
            Discover our handpicked selection of premium products that combine style, quality, and value.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              id={`product-${product.id}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="product-card group"
            >
              {/* Image Container */}
              <div className="relative aspect-square bg-secondary/50 p-8 flex items-center justify-center overflow-hidden">
                <span className="text-7xl transform group-hover:scale-110 transition-transform duration-500">
                  {product.image}
                </span>

                {/* Badge */}
                {product.badge && (
                  <span className={`absolute top-4 left-4 ${
                    product.badge === "sale" ? "badge-sale" : "badge-new"
                  }`}>
                    {product.badge === "sale" ? "Sale" : "New"}
                  </span>
                )}

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <button
                    onClick={() => toggleWishlist(product.id)}
                    className={`p-2.5 rounded-full transition-colors ${
                      wishlist.includes(product.id)
                        ? "bg-primary text-primary-foreground"
                        : "bg-card hover:bg-primary hover:text-primary-foreground"
                    }`}
                  >
                    <Heart className="w-4 h-4" fill={wishlist.includes(product.id) ? "currentColor" : "none"} />
                  </button> */}
<button
  onClick={() => toggleWishlist(product)}
  className={`p-2.5 rounded-full transition-colors ${
    wishlist.some(p => p.id === product.id)
      ? "bg-primary text-primary-foreground"
      : "bg-card hover:bg-primary hover:text-primary-foreground"
  }`}
>
  <Heart
    className="w-4 h-4"
    fill={wishlist.some(p => p.id === product.id) ? "currentColor" : "none"}
  />
</button>


                  <button className="p-2.5 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
<button
  onClick={() => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description:
        "Product added successfully. You can view it in your cart anytime.",
    });
  }}
  className="absolute bottom-4 left-4 right-4 py-3 bg-foreground text-background rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all flex items-center justify-center gap-2"
>
  <ShoppingBag className="w-4 h-4" />
  Add to Cart
</button>

              </div>

              <div className="p-5 space-y-3">
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 rounded-full border-2 border-border hover:border-primary hover:text-primary transition-all font-semibold">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
};
