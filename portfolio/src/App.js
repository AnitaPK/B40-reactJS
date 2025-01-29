import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import {Route, Routes} from 'react-router-dom'
import PageTwo from './components/PageTwo';
import Navbar from './components/Navbar';
import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function App() {


  const [user,setUser] = useState({name:"James Bond", isLoggedIn:true})

  return (
    <>
    <UserContext.Provider value={{user, setUser}}>
      <UserName />
      <Dashboard />
        <Navbar />
        <Routes>
            <Route path='/' element={<PageOne />}></Route>     
            <Route path='/page-two' element={<PageTwo />} ></Route>
        </Routes>
    </UserContext.Provider>
    </>
  );

function UserName(){
  const {user} = useContext(UserContext);
  return(
    <h1>{user.name}</h1>
  )
}

function Dashboard(){
  const {setUser} = useContext(UserContext);
  const handleLogout = () =>{
    setUser({isLoggedIn:false, user:''})
  }

  return(
    <button onClick={handleLogout}>Logout</button>
  )
}

}

export default App;
