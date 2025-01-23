import React,{useRef} from 'react'

const InputRefCompo = () => {
    const inputRef = useRef(null);
    function handleFocus(){
        if(inputRef.current ){
            inputRef.current.focus();
        }
    }

   return (
    <div style={{marginLeft:"25px"}}>
      <input placeholder='click button to focus me' ref={inputRef}/>
      <button onClick={handleFocus}>Click me to focus on input</button>
    </div>
  )
}

export default InputRefCompo
