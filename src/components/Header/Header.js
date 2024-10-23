import './Header.css';
import logo from '../../assets/images/1.-logo_barra.png'
import { useEffect, useState } from 'react';
import { NavList } from './NavList/NavList';

function Header() {
  const [windowWidth, setWindowWidth] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize',handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);
  
  
  return (
    <header className="header">
        <div className='header__logo'>
            <img src={logo} alt='Logo'/>
        </div>
      {windowWidth > 937 && <NavList/>}
    </header>
  );
}

export {Header};