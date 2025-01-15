import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const FetchQuotesAxios = () => {
    const [quotes, setQuote] = useState([])
    useEffect(()=>{
        axios.get('https://dummyjson.com/quotes')
        .then(response=>setQuote(response.data.quotes))
        // console.log(quote);
    },[])
  return (
    <div>
      {quotes.map((q,i)=>(
        <>
        <span>{i}</span>
        <h2>{q.quote}</h2>
        </>
      ))}
    </div>
  )
}

export default FetchQuotesAxios;