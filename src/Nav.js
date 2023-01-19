import { Link } from 'react-router-dom'

function Nav() {
    const toggleMenu = () => {
        var x = document.getElementById("navlist");
        if (x.className === "navlist") {
            x.className += " responsive";
        } else {
            x.className = "navlist";
        }
    }
    return (
        <>
            <button onClick={toggleMenu} className="icon">
                <i className="fa fa-bars"></i>
            </button>
            <nav className='topnav'>
                <div className='navlist' id="navlist">
                    <Link to='/' className='navlink'>Home</Link>
                    <Link to='/about' className='navlink'>About</Link>
                    <Link to='/menu' className='navlink'>Menu</Link>
                    <Link to="/booking" className='navlink'>Reservations</Link>
                    <Link to='/order-online' className='navlink'>Order online</Link>
                    <Link to='/login' className='navlink'>Login</Link>
                </div>
            </nav>
        </>
    );
}

export default Nav;