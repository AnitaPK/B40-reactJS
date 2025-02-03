import React, { useContext, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
// import { CartContext } from './cartContext/CartContext'
import { cartReducer, initialState } from "./cartReducer/cartReducer.js";


const content = ({products, dispatch}) => {
    // const {addToCart,cart,setCart} = useContext(CartContext);

    // const [state, dispatch] = useReducer(cartReducer, initialState);

    const addToCart = (product) => {
      console.log('Clicked***',product)
      dispatch({ type: "ADD_TO_CART", payload: product });
      toast.success(`${product.Name1} added to cart!`);
    };
  return (
    <>
     <div class="m-5 d-flex justify-content-center gap-5 flex-wrap">
        {
          products.map((product) => (
            <div key={product.id}  style={{width:"200px",heigth:"500px"}} class="text-center  border border-3  rounded">
             <img style={{width:"100%",height:"200px"}} src={product.Img}/>
            <div class="p-2 text-black ">
            <h3 >{product.Name1}</h3>
             <h5>₹{product.Price}</h5>
             {/* <button class="btn btn-primary" onClick={()=>setCart([...cart,product])}>Add To Cart</button> */}
             <button className="btn btn-primary" onClick={() => addToCart(product)}>
                Add To Carts
              </button>
             <Link to={`/home-page/${product.id}`} type='button' className='btn btn-success' product={product}>View more</Link>
            </div>
            </div>
           
                   ))
        }
      </div>
      <ToastContainer />
    </>
  )
}

export default content