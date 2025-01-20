import logo from './logo.svg';
import './App.css';
import PageOne from './components/PageOne';
import {Route, Routes} from 'react-router-dom'
import PageTwo from './components/PageTwo';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path='/' element={<PageOne />}></Route>     
            <Route path='/page-two' element={<PageTwo />} ></Route>
        </Routes>
    </>
  );
}

export default App;
