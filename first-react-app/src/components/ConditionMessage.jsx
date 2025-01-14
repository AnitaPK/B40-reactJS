import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";

const ConditionMessage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  function handleLogin() {
    if(isLoggedIn){
    setIsLoggedIn(false);
    }else {
        setIsLoggedIn(true)
    }
  }
  return (
    <div>
      {isLoggedIn ? (
        <>
          <p>Welcome to our website</p>
          <Navbar />
        </>
      ) : (
        <p>Please Log in</p>
      )}
      <button onClick={handleLogin}>{isLoggedIn ? <span> Logout</span> : <span> Login </span>}</button>
    </div>
  );
};

export default ConditionMessage;
