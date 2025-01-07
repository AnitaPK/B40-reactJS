import React from 'react'
import "./Button.css"

const Button = (props) => {
    console.log(props,"props");
    const girls = props.nameButton
  return (
    <>
    {girls.map((girl, index)=>(
        <>
        <button key={index}>{girl}</button>
        {console.log(girl,index)}
        </>
    ))}
    </>
  )
}

export default Button
