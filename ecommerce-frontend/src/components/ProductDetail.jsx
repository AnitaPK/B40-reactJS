import React, { useEffect, useState } from 'react'
import { Link, Route, Routes, useParams } from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const ProductDetail = ({products}) => {
    const {ID} = useParams()
    console.log(ID);

    const[prod, setProd] = useState({})


    console.log(products)


    useEffect(()=>{
        setProd(products.find((p)=>p.id == ID))
        console.log("*******",prod)
    },[])

  return (
    <>
    <div>
      <h1>Product{prod.Name1}</h1>
      <div className='container'>
        <img src={prod.Img} className='img-fluid'/>
      </div>
      <p className='text-center'>Price:{prod.Price}</p>
      <Link to='review' className='m-2'>Show Review</Link>
      <Link to='rating'>Rating</Link>
    </div>
    <Routes>
        <Route path='review' element={<Review />} ></Route>
        <Route path='rating' element={<Rating />}></Route>
    </Routes>
    </>
  )
}
function Review(){
    return(
        <>
        <h3>review</h3>
        <p>Review will show here</p>
        </>
    )
}

function Rating(){
    return(
        <>
        <h2>Rating</h2>
        <p>
            <FaStar />
            <FaStar />
<FaRegStarHalfStroke />
<CiStar />
<CiStar />

        </p>

        </>
    )
}
export default ProductDetail
