import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [number1, setNumber1] = useState()
    const [number2, setNumber2] = useState()
    const [result, setResult] = useState(0)

    function hadleAddition (e){
        e.preventDefault();
        setResult(parseInt(number1)+parseInt(number2))
    }

  return (
    <div>
      <input type="number" value={number1} onChange={(e)=>setNumber1(e.target.value)}/>
      <input type="number" value={number2} onChange={(e)=>setNumber2(e.target.value)}/>
      <button onClick={hadleAddition}>+</button>
      <button onClick={hadleAddition}>-</button>
      <button onClick={hadleAddition}>*</button>
      <button onClick={hadleAddition}>/</button>
      <p >{result}</p>

    </div>
  )
}

export default Calculator
