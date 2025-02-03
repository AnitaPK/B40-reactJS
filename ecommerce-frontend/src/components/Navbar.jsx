import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../themeContext/ThemeContext'
import { CartContext } from '../pages/cartContext/CartContext'
import { Link } from 'react-router-dom'


const Navbar = ({isLogin, setIsLogin, cartState}) => {

  const {theme,toggleTheme} = useContext(ThemeContext)
  console.log(theme);
const {cartLength} = useContext(CartContext)

function handleLogout(){
    setIsLogin(isLogin=false)
}

  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${theme=='light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
  <a className="navbar-brand" href="#">Navbar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>

    </ul>
    <button onClick={toggleTheme}>ChangeTheme</button>
    <Link to='/home-page/cart' >Cart
    <sup>{cartLength}</sup>
    </Link>
    <Link to='/home-page/cartReducer' >CartFromReducer
    <sup>{cartState.cartLength}</sup>
    </Link>

    <form className="form-inline my-2 my-lg-0">
      <button className='btn btn-primary my-2 my-sm-0' onClick={handleLogout}>Logout</button>
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar