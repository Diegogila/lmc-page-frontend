import './Header.css';
import logo from '../../assets/images/1.-logo_barra.png'

function Header() {
  return (
    <header className="header">
        <div className='header__logo'>
            <img src={logo} alt='Logo'/>
        </div>
        <nav>
            <ul>
                <li><a className='nav__link' href='#Servicios'>Servicios</a></li>
                <li><a className='nav__link' href='#Nosotros'>Nosotros</a></li>
                <li><a className='nav__link' href='#Cursos'>Cursos</a></li>
                <li><a className='nav__link' href='#Blog'>Blog</a></li>
                <li><a className='nav__link nav__link--focused' href='#Contacto'>Contacto</a></li>
            </ul>
        </nav>
    </header>
  );
}

export {Header};