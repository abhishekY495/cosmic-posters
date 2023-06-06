import React, { useState, useEffect } from "react";

import "./PlaceOrder.css"

export default function PlaceOrder() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    count > 0 && (
      <div className="overlay">
        <div id="order-message">
          <p>Order Placed 💰</p>
          <p>Redirecting to Profile in {count}</p>
        </div>
      </div>
    )
  );
}
