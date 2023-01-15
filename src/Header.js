import logo from './assets/img/logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header className='header col-8'>
      <div id='header-logo' class='col-2'>
        <img src={logo} alt='logo' />
      </div>
      <Nav />
    </header>
  );
}

export default Header;