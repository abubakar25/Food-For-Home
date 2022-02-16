import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "../Layout/HeaderCartButton.module.css";
import CartContext from "../Store/cart-context";

function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const NumberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <div>
      <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your cart</span>
        <span className={classes.badge}>{NumberOfCartItems}</span>
      </button>
    </div>
  );
}

export default HeaderCartButton;
