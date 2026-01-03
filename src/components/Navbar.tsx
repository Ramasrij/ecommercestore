import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, Heart, User,Edit2, } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "../context/CartContext";



const navLinks = [
  { to: "/", hash: "home", label: "Home" },
  { to: "/", hash: "products", label: "Products" },
  { to: "/", hash: "categories", label: "Categories" },
  { to: "/", hash: "deals", label: "Deals" },
  { to: "/", hash: "contact", label: "Contact" },
];
const products = [
  { id: 1, name: "Premium Wireless Headphones" },
  { id: 2, name: "Designer Leather Watch" },
  { id: 3, name: "Minimal Sneakers" },
  { id: 4, name: "Smart Fitness Tracker" },
  { id: 5, name: "Premium Sunglasses" },
  { id: 6, name: "Leather Backpack" },
  { id: 7, name: "Wireless Earbuds Pro" },
  { id: 8, name: "Classic Denim Jacket" },
];

export const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
const [isUserOpen, setIsUserOpen] = useState(false);
const [isEditOpen, setIsEditOpen] = useState(false);
const [username, setUsername] = useState("Admin"); // default
const [tempUsername, setTempUsername] = useState(username);
const userRef = useRef<HTMLDivElement>(null);

// close popups when clicked outside
useEffect(() => {
  const handleClickOutside = (e: MouseEvent) => {
    if (userRef.current && !userRef.current.contains(e.target as Node)) {
      setIsUserOpen(false);
      setIsEditOpen(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  // const [cartCount] = useState(3);
  const { wishlist } = useWishlist();
  const location = useLocation();
const { cart } = useCart();
  // scroll shadow
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // hash scroll fix (wishlist → home sections)
  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            className="font-display font-bold text-2xl text-foreground flex items-center gap-2"
          >
            <span className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-primary-foreground" />
            </span>
            <span>
              Shop<span className="text-gradient">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.hash}
                to={`${link.to}#${link.hash}`}
                className="nav-link"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            {/* <button className="p-3 rounded-full hover:bg-secondary">
              <Search className="w-5 h-5" />
            </button> */}
<button
  onClick={() => setIsSearchOpen((prev) => !prev)}
  className="p-3 rounded-full hover:bg-secondary"
>
  <Search className="w-5 h-5" />
</button>

            {/* Wishlist */}
            <Link
              to="/wishlist"
              className="relative p-3 rounded-full hover:bg-secondary"
            >
              <Heart
                className="w-5 h-5"
                fill={wishlist.length > 0 ? "currentColor" : "none"}
              />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Cart */}
            {/* <button className="p-3 rounded-full hover:bg-secondary relative">
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-primary-foreground text-xs font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button> */}
<Link
  to="/cart"
  className="relative p-3 rounded-full hover:bg-secondary"
>
  <ShoppingBag className="w-5 h-5" />

  {cart.length > 0 && (
    <span className="absolute -top-1 -right-1 w-5 h-5 bg-primary text-white text-xs rounded-full flex items-center justify-center">
      {cart.length}
    </span>
  )}
</Link>


            {/* <button className="p-3 rounded-full hover:bg-secondary">
              <User className="w-5 h-5" />
            </button> */}
<div className="relative" ref={userRef}>
  <button
    onClick={() => setIsUserOpen(!isUserOpen)}
    className="p-3 rounded-full hover:bg-secondary"
  >
    <User className="w-5 h-5" />
  </button>

  {/* User info popup */}
  {isUserOpen && !isEditOpen && (
    <div className="absolute right-0 mt-2 w-60 bg-card shadow-lg rounded-xl p-4 flex flex-col gap-3 animate-fadeIn z-50">
      <div className="w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center rounded-full font-bold text-lg">
        {username[0].toUpperCase()}
      </div>
      <div className="flex flex-col">
        <span className="font-semibold text-foreground">{username}</span>
        <span className="text-sm text-muted-foreground">admin@shophub.com</span>
      </div>
      <button
        onClick={() => setIsEditOpen(true)}
        className="mt-2 flex items-center gap-2 text-sm font-medium text-primary hover:underline"
      >
        <Edit2 className="w-4 h-4" /> Edit Username
      </button>
    </div>
  )}

  {/* Edit username popup */}
  {isEditOpen && (
    <div className="absolute right-0 mt-2 w-64 bg-card shadow-lg rounded-xl p-4 flex flex-col gap-3 animate-fadeIn z-50">
      <div className="flex justify-between items-center">
        <span className="font-semibold text-foreground">Edit Profile</span>
        <button onClick={() => setIsEditOpen(false)}>
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <label className="text-sm text-muted-foreground">Username</label>
        <input
          type="text"
          value={tempUsername}
          onChange={(e) => setTempUsername(e.target.value)}
          className="w-full px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:border-primary"
        />
      </div>

      <div className="flex flex-col gap-2 mt-2">
        <label className="text-sm text-muted-foreground">Email (readonly)</label>
        <input
          type="text"
          value="admin@shophub.com"
          readOnly
          className="w-full px-3 py-2 border rounded-md bg-background text-foreground cursor-not-allowed"
        />
      </div>

      <button
        onClick={() => {
          setUsername(tempUsername);
          setIsEditOpen(false);
        }}
        className="mt-4 bg-primary text-primary-foreground rounded-lg py-2 font-semibold hover:bg-primary/90 transition-colors"
      >
        Save
      </button>
    </div>
  )}
</div>

            <ThemeToggle />
          </div>
<AnimatePresence>
  {isSearchOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="absolute top-20 right-6 w-80 bg-background border rounded-xl p-4 shadow-lg z-50"
    >
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-lg bg-background border outline-none focus:ring-2 focus:ring-primary"
      />

      {search && (
        <div className="mt-3 max-h-60 overflow-y-auto">
          {products
            .filter((p) =>
              p.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearch("");

                  const el = document.getElementById(
                    `product-${p.id}`
                  );
                  if (el) {
                    el.scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                    });
                  }
                }}
                className="w-full text-left px-3 py-2 rounded-md hover:bg-secondary text-sm"
              >
                {p.name}
              </button>
            ))}
        </div>
      )}
    </motion.div>
  )}
</AnimatePresence>


          {/* Mobile Buttons */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-effect border-t"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.hash}
                  to={`${link.to}#${link.hash}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium"
                >
                  {link.label}
                </NavLink>
              ))}

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 text-muted-foreground pt-4 border-t"
              >
                <Heart className="w-5 h-5" /> Wishlist
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
