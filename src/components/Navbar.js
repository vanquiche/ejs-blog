import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import useReactMatchMedia from 'react-simple-matchmedia';
import * as style from '../styles/styles.module.css';

export default function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const dropdownMenu = useRef(null);
  const mobileView = useReactMatchMedia('phone');

  useEffect(() => {
    const resetMenu = () => {
      setMenuState(false);
      document.body.style.overflow = 'scroll';
    };
    window.addEventListener('resize', resetMenu);

    return () => {
      window.removeEventListener('resize', resetMenu);
    };
  }, []);

  function openMenu() {
    dropdownMenu.current.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    document.body.style.overflow = 'scroll';
    dropdownMenu.current.classList.remove('visible');
  }

  function handleClick() {
    setMenuState(!menuState);
    if (menuState === false) {
      openMenu();
    } else {
      closeMenu();
    }
  }

  return (
    <nav className={style.layoutNavContainer}>
      <Link className={style.layoutNavLogo} to='/'>
        everythingJS
      </Link>
      <Link to='/'>home</Link>
      <Link to='/posts'>posts</Link>
      <Link to='/contact'>contact</Link>
      <FontAwesomeIcon
        className={style.sandwichBtn}
        icon={menuState ? faTimes : faBars}
        onClick={handleClick}
      />
      {mobileView && (
        <ul className={style.layoutNavMenu} ref={dropdownMenu}>
          <li>
            <Link to='/' onClick={closeMenu}>
              home
            </Link>
          </li>
          <li>
            <Link to='/posts' onClick={closeMenu}>
              posts
            </Link>
          </li>
          <li>
            <Link to='/about' onClick={closeMenu}>
              about
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={closeMenu}>
              contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
