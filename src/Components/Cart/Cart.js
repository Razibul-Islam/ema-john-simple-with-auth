import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, clearCart, children }) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = total * 0.1;

  const grandTotal = total + shipping + tax;

  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>selected Item: {quantity}</p>
      <p>Total Price: ${total}</p>
      <p>Total Shipping Charge: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
      <button className="clear-btn" onClick={clearCart}>Clear Cart <FontAwesomeIcon className="trash" icon={faTrashAlt}></FontAwesomeIcon></button>
      {children}
    </div>
  );
};

export default Cart;
