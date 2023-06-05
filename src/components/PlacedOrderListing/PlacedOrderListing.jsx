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
        <p>Your Orders ({placedOrders.length})</p>
      </div>
      {placedOrders.map(({ orderId, posters }) => {
        return (
          <div key={orderId} id="placed-order-posters" style={hideStyle}>
            <p>Order Id: {orderId}</p>
            {posters.map(({ name, quantity }) => {
              return (
                <p>
                  {name} ({quantity})
                </p>
              );
            })}
            <hr />
          </div>
        );
      })}
    </div>
  );
}
