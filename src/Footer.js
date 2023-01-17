function Footer() {
    return (
        <footer className='footer col-12 centered'>
            <div className="wrapper col-8">
                <div className="col-3">
                    <img src={'/assets/img/logo.svg'} alt='logo' />
                </div>
                <div className="col-3">
                    <h3>Sitemap</h3>
                    <ul className="lead-text">
                        <li><a href='/home'>Home</a></li>
                        <li><a href='/about'>About</a></li>
                        <li><a href='/menu'>Menu</a></li>
                        <li><a href='/reservations'>Reservations1</a></li>
                        <li><a href='/order-online'>Order online</a></li>
                        <li><a href='/login'>Login</a></li>
                    </ul>
                </div>
                <div className="lead-text col-3">
                    <h3>Contact</h3>
                    Hope Street 54, <br />
                    Chicago, IL, USA<br />
                    +1 809 908 98<br />
                    contact@littlelemon.com
                </div>
                <div className="col-3">
                    <h3>Social media links</h3>
                    <ul className="lead-text">
                        <li><a href='https://facebook.com'>Facebook</a></li>
                        <li><a href='https://youtube.com'>Youtube</a></li>
                        <li><a href='https://instagram.com'>Instagram</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;