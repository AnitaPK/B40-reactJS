import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'

const LayOut = ({isLogin, setIsLogin, products, dispatch, cartState}) => {
  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin} cartState={cartState}/>
      <HomePage products={products} dispatch={dispatch}/>
    </>
  )
}

export default LayOut
