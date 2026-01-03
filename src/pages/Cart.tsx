import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

if (cart.length === 0) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium text-muted-foreground">
        Your Cart is empty 🛒
      </p>
    </div>
  );
}

  return (
    <div className="max-w-4xl mx-auto py-10 mt-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {cart.map(item => (
        <div
          key={item.id}
          className="flex items-center justify-between gap-4 border-b py-4"
        >
          {/* Left: image + name + price */}
          <div className="flex items-center gap-4">
            {/* Product image */}
            <div className="w-20 h-20 flex items-center justify-center bg-secondary/20 rounded-lg">
              {/* if `item.image` is an emoji or URL */}
              {typeof item.image === "string" && item.image.startsWith("http") ? (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                // fallback for emoji-like or text icons
                <span className="text-4xl">{item.image}</span>
              )}
            </div>

            {/* Name + Price */}
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-muted-foreground">${item.price}</p>
            </div>
          </div>

          {/* Right: Remove button */}
          <button
            onClick={() => removeFromCart(item.id)}
            className="text-red-500 text-sm hover:underline"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
