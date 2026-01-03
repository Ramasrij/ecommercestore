import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WishlistProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </WishlistProvider>
    </BrowserRouter>
  </React.StrictMode>
);



// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App";
// import "./index.css";
// import { WishlistProvider } from "./context/WishlistContext";
// import { CartProvider } from "./context/CartContext";

// const container = document.getElementById("root")!;

// createRoot(container).render(
//   <React.StrictMode>
//     <CartProvider>
//     <WishlistProvider>
//       <App />
//     </WishlistProvider>
//     </CartProvider>
//   </React.StrictMode>
// );
