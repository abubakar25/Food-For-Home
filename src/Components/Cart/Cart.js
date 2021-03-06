import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

function Cart(props) {
  const CartItems = [
    { id: "1", name: "ashi", price: "12.99", description: "Delicious Meals" },
  ].map((cartItem) => <ul>{cartItem.name}</ul>);
  return (
    <>
      <Modal>
        {CartItems}
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.99</span>
        </div>
        <div className={classes.actions}>
          <button
            className={classes["button--alt"]}
            onClick={props.onCloseCart}
          >
            Close
          </button>
          <button className={classes.button}>Order</button>
        </div>
      </Modal>
    </>
  );
}

export default Cart;
