export const initialState = {
    cart: [],
    cartLength: 0,
    totalPrice: 0,
  };
  
  export const cartReducer = (state, action) => {
    console.log(action.type,action.p)
    switch (action.type) {
      case "ADD_TO_CART": {
        const updatedCart = [...state.cart, action.payload];
        console.log(updatedCart);
        const updatedTotalPrice = state.totalPrice + action.payload.Price;
        console.log(updatedTotalPrice)
        return {
          ...state,
          cart: updatedCart,
          cartLength: updatedCart.length,
          totalPrice: updatedTotalPrice,
        };
      }
      case "REMOVE_FROM_CART": {
        const updatedCart = state.cart.filter((item) => item.id !== action.payload.id);
        const updatedTotalPrice = state.totalPrice - action.payload.Price;
        return {
          ...state,
          cart: updatedCart,
          cartLength: updatedCart.length,
          totalPrice: updatedTotalPrice,
        };
      }
      default:
        return state;
    }
  };
  