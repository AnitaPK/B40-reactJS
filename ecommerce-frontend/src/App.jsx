import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import { Route, Routes } from "react-router-dom";
import LayOut from "./pages/LayOut";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>

    <Routes>
      <Route path='/' element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}></Route>
      <Route path='register' element={<RegisterPage />}> </Route>
      <Route path='home-page' element={<LayOut isLogin={isLogin} setIsLogin={setIsLogin}/>} />

    </Routes>


    {/* <RegisterPage />
      {isLogin ? (
        <>
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
          <HomePage />
        </>
      ) : (
        <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
      )} */}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
