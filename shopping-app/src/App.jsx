
import React, { useState } from "react";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <div style={{
      textAlign: "center",
      padding: "30px",
      fontFamily: "Arial"
    }}>
      <h1>Online Shopping Website</h1>

      <hr />

      <h2>Samsung Smartphone</h2>

      <img
        src="https://placehold.co/250x200?text=Smartphone"
        alt="Smartphone"
        width="250"
      />

      <h3>Price: ₹15,000</h3>

      <p>128GB Storage | 8GB RAM</p>

      <button onClick={() => setCart(cart + 1)}>
        Add to Cart
      </button>

      <h3>Cart Items: {cart}</h3>

      <button onClick={() => alert("Order placed successfully!")}>
        Buy Now
      </button>
    </div>
  );
}

export default App;
