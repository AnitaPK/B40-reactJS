import React, { useContext } from 'react'
import { CartContext } from '../pages/cartContext/CartContext'

const Cart = () => {
    const {cart} = useContext(CartContext);
    console.log(cart);
  return (
    <div>
      Cart list
      {cart.map((p)=>(
        <p>{p.Name1}</p>
      ))}
    </div>
  )
}

export default Cart
