import React from 'react'
import useCustomProductList from './useCustomProductList'

const ProductList = () => {
    const {loading,err,products} = useCustomProductList('https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects')
console.log(loading,err,products)
if (loading) return(<p>Loading....</p>)

if (err) return(<p>Error while loading...</p>)

return (
    <>
     {products.map((p,index)=>(
        <>
        <p key={index}></p>
        <p>{p.ProjectName}</p>
        </>
     ))} 
    </>
  )
}

export default ProductList

