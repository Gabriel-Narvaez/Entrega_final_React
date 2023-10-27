import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (    
      <header>
        <img src={"./img/logo.png"} alt="logo motoshop" />
        <h1>Tienda de Motos</h1>
        <nav>
          <ul>
            <li>Motos</li>
            <li>Accesorios</li>
            <li>Repuestos</li>
          </ul>

        </nav>
        <CartWidget />
      </header>    
  )
}

export default NavBar