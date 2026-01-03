import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { IoMdCard } from "react-icons/io";
import { IoIdCardOutline } from "react-icons/io5";
import { IoStorefrontOutline } from "react-icons/io5";
import { MdOutlineBusAlert } from "react-icons/md";
import { ShoppingBag } from "lucide-react";

const Checkout = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
const [orderPlaced, setOrderPlaced] = useState(false);


  const salePrice = Number(searchParams.get("price")) || 0;
  const originalPrice = Number(searchParams.get("original")) || 0;
  const discount = originalPrice - salePrice;

  const [paymentMethod, setPaymentMethod] = useState<"card" | "upi">("card");

  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-16 px-4 mt-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: Shipping & Payment */}
        <div className="bg-card dark:bg-card-dark p-8 rounded-2xl shadow space-y-6">
          <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark">Complete Your Order</h2>

          {/* Shipping Address */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2 text-sm text-black dark:text-white">
              <LiaShippingFastSolid className="w-7 h-7 text-primary"/> Shipping Address
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="First Name" />
              <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="Last Name" />
            </div>
            <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="Address" />
            <div className="grid grid-cols-2 gap-4">
              <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="City" />
              <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="PIN Code" />
            </div>
            <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="Phone Number" />
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <h3 className="font-medium flex items-center gap-2 text-sm black dark:text-white">
              <IoMdCard className="w-7 h-7 text-primary"/> Payment Method
            </h3>
            <div className="flex gap-4">
              {["card", "upi"].map((type) => (
                <button
                  key={type}
                  onClick={() => setPaymentMethod(type as any)}
                  className={`flex-1 py-3 rounded-xl border font-medium text-sm
                    ${
                      paymentMethod === type
                        ? "border-primary bg-primary "
                        : "border-muted-foreground dark:border-muted-foreground-dark text-muted-foreground dark:text-muted-foreground-dark"
                    }`}
                >
                  {type === "card" ? "Card" : "UPI"}
                </button>
              ))}
            </div>

            {paymentMethod === "card" && (
              <>
                <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="Cardholder Name" />
                <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="Card Number" />
                <div className="grid grid-cols-2 gap-4">
                  <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="MM/YY" />
                  <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="CVV" />
                </div>
              </>
            )}

            {paymentMethod === "upi" && (
              <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="yourupi@bank" />
            )}

            <input className="w-full p-3 rounded-xl bg-muted text-foreground placeholder:text-muted-foreground border border-border focus:outline-none focus:ring-2 focus:ring-primary/40 " placeholder="Email Address" />

<button
  onClick={() => setOrderPlaced(true)}
  className="w-full py-4 rounded-2xl text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90"
>
  Place Order • ₹{salePrice}
</button>

          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="bg-card dark:bg-card-dark p-8 rounded-2xl shadow h-fit space-y-6">
          <h3 className="text-xl font-bold text-foreground dark:text-foreground-dark">Order Summary</h3>

          <div className="flex items-center gap-4">
            <div className="">
            <span className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center">
              <ShoppingBag className="w-7 h-7 text-primary-foreground" />
            </span>
            </div>
            <div>
              <p className="font-medium text-foreground dark:text-foreground-dark">SoundPro Max Earbuds</p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">Color: Midnight Black</p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground-dark">Qty: 1</p>
            </div>
          </div>

          <div className="flex justify-between text-sm text-muted-foreground dark:text-muted-foreground-dark">
            <span>Subtotal</span>
            <span className="line-through text-muted-foreground/50 dark:text-muted-foreground-dark/50">₹{originalPrice}</span>
          </div>

          <div className="flex justify-between text-sm text-primary">
            <span>Discount</span>
            <span>- ₹{discount}</span>
          </div>

          <div className="flex justify-between text-sm text-muted-foreground dark:text-muted-foreground-dark">
            <span>Shipping</span>
            <span>FREE</span>
          </div>

          <hr className="border-muted-foreground/30 dark:border-muted-foreground-dark/30" />

          <div className="flex justify-between items-end">
            <span className="font-semibold text-foreground dark:text-foreground-dark">Total</span>
            <div className="text-right">
              <p className="text-2xl font-bold text-primary">₹{salePrice}</p>
              <p className="text-xs text-muted-foreground/70 dark:text-muted-foreground-dark/70">Inclusive of all taxes</p>
            </div>
          </div>

          <div className="bg-foreground/5 dark:bg-foreground-dark/10 p-4 rounded-xl text-sm space-y-1 text-muted-foreground dark:text-muted-foreground-dark">
          <h1 className="text-black dark:text-white flex gap-2"> <MdOutlineBusAlert /> Delivery Informations</h1>
            <p>✓ Express Delivery (3-5 days)</p>
            <p>✓ Free Shipping Pan India</p>
            <p>✓ Cash on Delivery Available</p>
            <p>✓ 7-Day Easy Returns</p>
          </div>
        </div>
      </div>
      {orderPlaced && (
  <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">
    <div className="bg-card dark:bg-card-dark rounded-3xl p-8 max-w-md w-full text-center shadow-2xl animate-in fade-in zoom-in">
      
      {/* Tick */}
      <div className="w-20 h-20 mx-auto rounded-full bg-green-500/15 flex items-center justify-center mb-6">
        <svg
          className="w-10 h-10 text-green-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h2 className="text-2xl font-bold text-foreground dark:text-foreground-dark">
        Thanks for your order! 🎉
      </h2>

      <p className="mt-2 text-muted-foreground dark:text-muted-foreground-dark text-sm">
        Your order has been placed successfully.
      </p>

      <div className="mt-4 bg-muted/50 dark:bg-muted-dark/30 p-4 rounded-xl text-sm text-muted-foreground dark:text-muted-foreground-dark">
        🚚 Delivery within <b>7 days</b><br />
        by <b>ShopHub</b>  
        <br />
        Sit tight, good vibes incoming ✨
      </div>

      <button
        onClick={() => setOrderPlaced(false)}
        className="mt-6 w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90"
      >
        Continue Shopping
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default Checkout;
