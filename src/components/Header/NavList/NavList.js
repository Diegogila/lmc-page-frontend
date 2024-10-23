import './NavList.css';


function NavList() {
  return (
        <nav>
            <ul>
                <li><a className='nav__link' href='#Servicios'>Servicios</a></li>
                <li><a className='nav__link' href='#Nosotros'>Nosotros</a></li>
                <li><a className='nav__link' href='#Cursos'>Cursos</a></li>
                <li><a className='nav__link' href='#Blog'>Blog</a></li>
                <li><a className='nav__link nav__link--focused' href='#Contacto'>Contacto</a></li>
            </ul>
        </nav>
  );
}

export {NavList};