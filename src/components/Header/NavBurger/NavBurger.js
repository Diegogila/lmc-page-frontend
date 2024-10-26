import { useState } from 'react';
import './NavBurger.css';


function NavBurger() {
    const [menuOpened, setMenuOpened] = useState(false);

    const toggleMenu = () => {
        setMenuOpened(menuOpened ? false : true);
    };
    return (
        <>
            <button
            className='nav-burger__button'
            onClick={toggleMenu}
            ></button>
            <div className='nav-burguer__menu'>
                <nav>
                    <a
                    href='#'
                    style="animation-delay: 0.2s"
                    >Servicios</a>
                    <a
                    href='#'
                    style="animation-delay: 0.3s"
                    >Nosotros</a>
                </nav>
            </div>
        </>
        // <nav>
        //     <ul>
        //         <li><a className='nav__link' href='#Servicios'>Servicios</a></li>
        //         <li><a className='nav__link' href='#Nosotros'>Nosotros</a></li>
        //         <li><a className='nav__link' href='#Cursos'>Cursos</a></li>
        //         <li><a className='nav__link' href='#Blog'>Blog</a></li>
        //         <li><a className='nav__link nav__link--focused' href='#Contacto'>Contacto</a></li>
        //     </ul>
        // </nav>
  );
}

export {NavBurger};