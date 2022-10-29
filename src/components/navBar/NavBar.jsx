import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import styles from './NavBar.module.css';

export const NavBar = () => {
  const [isToggle, setIsToggle] = useState(false); 

  const handleShowMenu = () => setIsToggle(true); 
  const handleCloseMenu = () => setIsToggle(false);

  const isActive = () => setIsToggle(false); 

  return (
    <header className={styles.headerPage} >
      <h2>LOGO</h2>
      {isToggle && <nav>
        <ul className={styles.navlinks}>
          <li>
            <NavLink
              to='/'
              onClick={isActive}
              className={({ isActive }) => (isActive ? styles.active_home : "")}
            >Artista</NavLink>
          </li>
          <li>
            <NavLink
              to='/createdApplication'
              onClick={isActive}
              className={({ isActive }) => (isActive ? styles.active_all  : "")}>
              Guia de criação
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/aboutDeezer'
              onClick={isActive}
              className={({ isActive }) => (isActive ? styles.active_all : "")}>
              Sobre
            </NavLink>
          </li>
        </ul>
      </nav>}
      {isToggle ? 
        <button className={styles.menubtn} onClick={handleCloseMenu}><AiOutlineClose/></button>
        :
        <button className={styles.menubtn} onClick={handleShowMenu}><AiOutlineMenu/></button>
      }
    </header>
  )
}
