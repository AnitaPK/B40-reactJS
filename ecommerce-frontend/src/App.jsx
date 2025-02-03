import { useState, useReducer } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LoginPage from "./components/LoginPage";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import RegisterPage from "./components/RegisterPage";
import { Route, Routes } from "react-router-dom";
import LayOut from "./pages/LayOut";
import ProductDetail from "./components/ProductDetail";
import ThemeProvider from "./themeContext/ThemeContext";
import { CartProvider } from "./pages/cartContext/CartContext";
import Cart from "./components/Cart";
import CartFromReducer from "./pages/cartReducer/CartComponentReducer";
import { cartReducer, initialState } from "./pages/cartReducer/cartReducer";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const [products] = useState([
    {
      id: 1,
      Price: 20,
      Name1: "Samosa",
      Img: "https://i1.wp.com/vegecravings.com/wp-content/uploads/2017/03/samosa-recipe-step-by-step-instructions.jpg?fit=1801%2C1717&ssl=1",
    },
    {
      id: 2,
      Price: 10,
      Name1: "Cachori",
      Img: "https://s4.scoopwhoop.com/ach/food/13.jpg",
    },
    {
      id: 3,
      Price: 10,
      Name1: "Pakoda",
      Img: "https://tse4.mm.bing.net/th?id=OIP.Day9IKpifvFgpkOKn9VJVgHaE7&pid=Api&P=0&h=180",
    },
    {
      id: 4,
      Price: 10,
      Name1: "Chinese",
      Img: "https://tse1.mm.bing.net/th?id=OIP.yokku-p7TeSpUFMMk4o6KQHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 5,
      Price: 10,
      Name1: "Pavbhaji",
      Img: "https://tse1.mm.bing.net/th?id=OIP.yokku-p7TeSpUFMMk4o6KQHaE8&pid=Api&P=0&h=180",
    },
    {
      id: 6,
      Price: 10,
      Name1: "Salad",
      Img: "https://hellolittlehome.com/wp-content/uploads/2022/08/garden-salad-recipe-2.jpg",
    },
  ]);

  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <>
      <ThemeProvider>
        <CartProvider>
          <Routes>
            <Route
              path="/"
              element={<LoginPage isLogin={isLogin} setIsLogin={setIsLogin} />}
            ></Route>
            <Route path="/register" element={<RegisterPage />}>
              {" "}
            </Route>
            <Route
              path="/home-page"
              element={
                <LayOut
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                  products={products}
                  dispatch={dispatch}
                  cartState={state}
                />
              }
            />
            <Route
              path="/home-page/:ID/*"
              element={<ProductDetail products={products} />}
            ></Route>
            <Route path="/home-page/cart" element={<Cart />}></Route>
            <Route
              path="/home-page/cartReducer"
              element={
                <CartFromReducer cartState={state} dispatch={dispatch} />
              }
            ></Route>
          </Routes>
        </CartProvider>
      </ThemeProvider>

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
