import icon_hamburger_menu from './assets/img/icon_hamburger_menu.svg'

function Nav() {
    return (
        <nav className='navbar col-6'>
            <div className='burger_menu'><img src={icon_hamburger_menu} alt='hamburger menu' /></div>
            <div className='navlist-container'>
                <ul className='navlist lead-text bold'>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/booking'>Reservations</a></li>
                    <li><a href='/order-online'>Order online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;