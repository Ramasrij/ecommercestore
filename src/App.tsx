import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import Wishlist from "./pages/Wishlist";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import { Navbar } from "./components/Navbar";
import Checkout from "./pages/checkout";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <Navbar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout/:id" element={<Checkout />} /> 
          <Route path="*" element={<NotFound />} />
        </Routes>

      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
