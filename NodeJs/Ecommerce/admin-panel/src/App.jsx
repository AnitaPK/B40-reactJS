import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardAside from './pages/DashboardAside'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import { UserProvider } from './context/userContext';


function App() {

  return (
    <>
  <BrowserRouter>
  <UserProvider >
      <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard/*" element={<DashboardAside />}></Route>
      </Routes>
      <Footer />
      </UserProvider>
    </BrowserRouter>
    </>
  )
}

export default App
