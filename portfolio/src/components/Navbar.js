import React,{useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from '../App'

const Navbar = () => {
    const {user} = useContext(UserContext)
    // console.log(user.name);
    return (
      <>
        <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              {/* <button onClick={handlePageOne}>PageOne</button>
      <button onClick={handlePageTwo}>PageTwo</button> */}
      <Link to='/' >Page One</Link>
      <Link to='/page-two'>Go to page Two</Link>
            
            </div>
          </nav>
        </div>
      </>
    );
  };
  
  export default Navbar;
      
