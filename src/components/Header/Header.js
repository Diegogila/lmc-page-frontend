import './Header.css';

function Header() {
  return (
    <header className="header">
        <div className='header__logo'>
            <img src='#' alt='Logo'/>
        </div>
        <nav>
            <ul>
                <li><a href='#Servicios'>Servicios</a></li>
                <li><a href='#Nosotros'>Nosotros</a></li>
                <li><a href='#Cursos'>Cursos</a></li>
                <li><a href='#Blog'>Blog</a></li>
                <li><a href='#Contacto'>Contacto</a></li>
            </ul>
        </nav>
    </header>
  );
}

export {Header};