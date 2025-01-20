import React from "react";
import "./LoginPage.css";
import loginImage from "../assets/loginImage.jpg";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify"
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

  const navigate = useNavigate()

const [email,setEmail] = useState("");
const [password, setPassword] = useState("")
const SubmitFormData = (event) =>{
    event.preventDefault();
    console.log("******Register********",email,password)
    const payload ={email:email,password:password}
    localStorage.setItem('user1',JSON.stringify(payload));
    navigate('/')

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
          <h3>Register Here</h3>
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
              Register
            </button>
            {/* <button onClick={getFormValues}>Check Values</button> */}
          </form>
        </div>
      </div>
    </div>
    {/* <div>
        <h3>Email: <span>{email}</span></h3>
        <h3>Password: <span>{password}</span></h3>
    </div> */}
    <ToastContainer position="bottom-right"/>
    </>
  );
};

export default RegisterPage;
