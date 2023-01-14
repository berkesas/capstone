import icon_hamburger_menu from './assets/img/icon_hamburger_menu.svg'

function Nav() {
    return (
        <>
        <div className='burger_menu'><img src={icon_hamburger_menu} alt='hamburger menu'/></div>
        <nav className='navbar'>
            <ul className='navlist lead-text bold'>
                <li><a href='/home'>Home</a></li>
                <li><a href='/about'>About</a></li>
                <li><a href='/menu'>Menu</a></li>
                <li><a href='/reservations'>Reservations</a></li>
                <li><a href='/order-online'>Order online</a></li>
                <li><a href='/login'>Login</a></li>
            </ul>
        </nav>
        </>
    );
}

export default Nav;