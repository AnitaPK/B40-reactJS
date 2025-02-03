import React, { useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer.js";

const Cart = ({cartState, dispatch}) => {
//   const [state, dispatch] = useReducer(cartReducer, initialState);

  console.log(cartState.cartLength,"InCArt Component");

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      <p>Total Items: {cartState.cartLength}</p>
      <p>Total Price: ₹{cartState.totalPrice}</p>
      <ul>
        {cartState.cart.map((item) => (
          <li key={item.id}>
            {item.Name1} - ₹{item.Price}
            <button
              className="btn btn-danger ms-2"
              onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item })}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
