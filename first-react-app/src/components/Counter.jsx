import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const[userName, setUserName] = useState('Gaurav')
    const [formData, setFormData] = useState({email:"", password:""})
    function Increament(){
        console.log(count)
        setCount(count+1);
    }
    const decreament = () =>setCount(count-1)
  return (
    <>
    <h3>{userName}</h3>
    <button onClick={()=>setUserName("Gaurav Three")}>change Name</button>
      <h1>Counter:<span>{count}</span></h1>
      <button onClick={()=>setCount(count+1)}>Increament</button>
      <button onClick={()=>setCount(count-1)}>Decreament</button>
      <button onClick={Increament}>IncreamentByFunction</button>
      <button onClick={decreament}>DecreamentByFunction</button>
    </>
  )
}

export default Counter
