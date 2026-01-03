import { useRouter } from "next/router";

const CheckoutPage = () => {
  const router = useRouter();
  const { id } = router.query; // this will get the deal ID from the URL

  // Here you can fetch deal info based on ID
  const deal = {
    1: { name: "Premium Wireless Headphones", price: 199 },
    2: { name: "Smart Watch Pro Max", price: 349 },
    3: { name: "Designer Sneakers", price: 145 },
  }[id as string];

  return (
    <div className="container mx-auto py-20">
      <h1 className="text-3xl font-bold mb-4">Checkout: {deal?.name}</h1>
      <p className="mb-4">Price: ${deal?.price}</p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded-xl"
        onClick={() => alert("Payment flow coming soon!")}
      >
        Pay Now
      </button>
    </div>
  );
};

export default CheckoutPage;
