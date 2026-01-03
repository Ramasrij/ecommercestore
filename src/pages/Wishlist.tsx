import { Eye, Heart, Star } from "lucide-react";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
//   const { wishlist } = useWishlist();
const { wishlist, toggleWishlist } = useWishlist();
  if (wishlist.length === 0) {
    return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-lg font-medium text-muted-foreground">
        No liked products yet 💔
      </p>
    </div>
    );
  }

  return (
    <div className="container mx-auto py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {wishlist.map(product => (
        <div key={product.id} className="product-card">
          <div className="aspect-square flex items-center justify-center text-6xl bg-secondary/50">
            {product.image}
          </div>

          <div className="p-4 space-y-2">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="font-bold">${product.price}</p>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-medium">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>
                                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-foreground">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                  )}
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
