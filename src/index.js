import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import { AuthContextProvider } from "./contexts/AuthContext";
import { DataContextProvider } from "./contexts/DataContext";
import { CartContextProvider } from "./contexts/CartContext";
import { WishlistContextProvider } from "./contexts/WishlistContext";
import { AddressContextProvider } from "./contexts/AddressContext";
import { PlacedOrderContextProvider } from "./contexts/PlacedOrderContext";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthContextProvider>
        <DataContextProvider>
          <CartContextProvider>
            <WishlistContextProvider>
              <AddressContextProvider>
                <PlacedOrderContextProvider>
                  <App />
                </PlacedOrderContextProvider>
              </AddressContextProvider>
            </WishlistContextProvider>
          </CartContextProvider>
        </DataContextProvider>
      </AuthContextProvider>
    </Router>
  </React.StrictMode>
);
