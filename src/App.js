import React, { useState } from "react";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./Components/Store/CartProvider";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);
  const showCartHandler = () => {
    setShowCartModal(true);
  };
  const hideCartHandler = () => {
    setShowCartModal(false);
  };
  return (
    <CartProvider>
      {showCartModal && <Cart onCloseCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
