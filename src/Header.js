import logo from './assets/img/logo.svg';
import { Link } from 'react-router-dom'
// import Nav from './Nav';

function Header() {
  const toggleMenu = () => {
    var x = document.getElementById("navlist");
    if (x.className === "navlist") {
      x.className += " responsive";
    } else {
      x.className = "navlist";
    }
  }
  const hideMenu = () => {
    var x = document.getElementById("navlist");
    x.className = "navlist";
  }

  return (
    <header className='header col-12'>
      <div className='header-row col-8'>
        <div className='logo-row'>
          <div id='header-logo'>
            <img src={logo} alt='logo' />
          </div>
          <div id='burger-menu'>
            <button onClick={toggleMenu} className="icon">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
        <nav className='topnav'>
          <div className='navlist' id="navlist">
            <Link to='/' className='navlink' onClick={hideMenu}>Home</Link>
            <Link to='/about' className='navlink' onClick={hideMenu}>About</Link>
            <Link to='/menu' className='navlink' onClick={hideMenu}>Menu</Link>
            <Link to="/booking" className='navlink' onClick={hideMenu}>Reservations</Link>
            <Link to='/order-online' className='navlink' onClick={hideMenu}>Order online</Link>
            <Link to='/login' className='navlink' onClick={hideMenu}>Login</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;