function Footer() {
    return (
        <footer className='footer'>
            <nav>
                <h4>Sitemap</h4>
                <ul>
                    <li><a href='/home'>Home</a></li>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/menu'>Menu</a></li>
                    <li><a href='/reservations'>Reservations</a></li>
                    <li><a href='/order-online'>Order online</a></li>
                    <li><a href='/login'>Login</a></li>
                </ul>
            </nav>
            <div>
                <h4>Contact</h4>
                Hope Street 54, Chicago, IL, USA
                +1 809 908 98
                contact@littlelemon.com
            </div>
            <div>
                <h4>Social media links</h4>
                <ul>
                    <li><a href='https://facebook.com'>Facebook</a></li>
                    <li><a href='https://youtube.com'>Youtube</a></li>
                    <li><a href='https://instagram.com'>Instagram</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;