import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from './HomePage'

const LayOut = ({isLogin, setIsLogin}) => {
  return (
    <>
      <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
      <HomePage />
    </>
  )
}

export default LayOut
