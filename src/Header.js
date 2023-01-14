import logo from './assets/img/logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header className='header'>
      <div>
        <img src={logo} alt='logo' />
      </div>
      <Nav />
    </header>
  );
}

export default Header;