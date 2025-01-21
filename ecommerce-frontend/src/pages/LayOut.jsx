import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'

const LayOut = ({isLogin, setIsLogin, products}) => {
  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <HomePage products={products}/>
    </>
  )
}

export default LayOut
