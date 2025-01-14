import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <>
          <Navbar isLogin={isLogin} setIsLogin={setIsLogin}/>
          <HomePage />
        </>
      ) : (
        <LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
      {/* <LoginPage /> */}
    </>
  );
}

export default App;
