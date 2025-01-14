import React from "react";
import "./LoginPage.css";
import loginImage from "../assets/loginImage.jpg";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify"

const LoginPage = ({isLogin, setIsLogin}) => {

  console.log(isLogin, setIsLogin);


//   const [formData, SetFormData] = useState({email:"", password:""});
const [email,setEmail] = useState("");
const [password, setPassword] = useState("")
// console.log("email",email)
// console.log("Password",password)
const getFormValues = (event) =>{
    event.preventDefault();
    console.log("**************",email,password)
}

const SubmitFormData = (e) =>{
    e.preventDefault();
    console.log("**********")
    if(email=="a@gmail.com" && password=="123"){
    toast.success("Form Submitted")
    setIsLogin(isLogin = true)
    console.log("for true condition",isLogin);

    }else{
      toast.error('Enter correct values')
      setIsLogin(false)
      console.log("For false condition",isLogin);
    }
}


  return (
    <>
   
    <div className="sizeDiv gradImage">
      <div className="row">
        <div className="col">
          <img src={loginImage} alt="LOgin Image" className="LeftImage" />
        </div>
        <div className="col">
          <form className="mt-5 p-5" onSubmit={SubmitFormData}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                // onChange={(e)=>setEmail(e.target.value)}
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                // onChange={(e)=>setPassword(e.target.value)}
                onChange={(e)=>setPassword(e.target.value)}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Check me out
              </label>
            </div>
            <button type="submit" className="btn btn-primary ">
              Submit
            </button>
            {/* <button onClick={getFormValues}>Check Values</button> */}
          </form>
        </div>
      </div>
    </div>
    <div>
        <h3>Email: <span>{email}</span></h3>
        <h3>Password: <span>{password}</span></h3>
    </div>
    <ToastContainer position="bottom-right"/>
    </>
  );
};

export default LoginPage;
