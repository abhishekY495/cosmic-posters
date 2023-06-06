import React, { useContext, useState } from "react";

import { PlacedOrderContext } from "../../contexts/PlacedOrderContext";
import "./PlacedOrderListing.css";

export default function PlacedOrderListing() {
  const {
    state: { placedOrders },
  } = useContext(PlacedOrderContext);
  const [hideOrders, setHideOrders] = useState(true);
  const hideStyle = {
    display: hideOrders ? "none" : "block",
  };

  return (
    <div id="placed-order-container">
      <div
        id="placed-order-container-heading"
        onClick={() => setHideOrders(!hideOrders)}
      >
        <span>{hideOrders ? "⏩" : "⏬"}</span>
        <p>Orders ({placedOrders.length})</p>
      </div>
      {placedOrders.map(({ orderId, posters, totalAmount }) => {
        return (
          <div key={orderId} id="placed-order-posters" style={hideStyle}>
            <div className="order-id">
              <p>Order Id:</p>
              <span>{orderId}</span>
            </div>
            {posters.map(({ id, name, quantity, price }) => {
              return (
                <div key={id} className="placed-order-poster">
                  <p>
                    {name} ({quantity})
                  </p>
                  <p>{(price * quantity).toFixed(2)}</p>
                </div>
              );
            })}
            <div className="placed-order-total">
              <p>Total</p>
              <span className="total-amount">₹{totalAmount}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
