import React from 'react'
import useCustomProductList from './useCustomProductList'

const QuotesComponent = () => {
    const {loading,err,products} = useCustomProductList('https://dummyjson.com/quotes')
    console.log(loading,err,products);
    if (loading) return(<p>Loading....</p>)

        if (err) return(<p>Error while loading...</p>)
  return (
    <div>
      {products.map((q,i)=>(
        <>
        <p key={i}>{q.quote}</p>
        </>

      ))}
    </div>
  )
}

export default QuotesComponent


