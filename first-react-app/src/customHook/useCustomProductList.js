import React, { useEffect } from 'react'
import { useState } from 'react'

const useCustomProductList = (urlfromComponent) => {
    console.log(urlfromComponent);
const [products,setProducts] = useState()
const [err, setErr] = useState(false)
const [loading, setLoading] = useState(true)
    const fetchProducts = ()=>{
        try {
            fetch(urlfromComponent)
            .then(responce=>responce.json())
            .then(data=>setProducts(data.quotes))
            setLoading(false);
            setErr(false)
        } catch (error) {
            console.log(error)
            setErr(true)
        }
    }
    useEffect(()=>{
        fetchProducts()
    },[])
// console.log(products);
  return {products,err,loading,fetchProducts}
}

export default useCustomProductList
