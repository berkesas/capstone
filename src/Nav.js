import icon_hamburger_menu from './assets/img/icon_hamburger_menu.svg'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className='navbar col-6'>
            <div className='burger_menu'><img src={icon_hamburger_menu} alt='hamburger menu' /></div>
            <div className='navlist-container'>
                <ul className='navlist lead-text bold'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/menu'>Menu</Link></li>
                    <li><Link to="/booking">Reservations</Link></li>
                    <li><Link to='/order-online'>Order online</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;