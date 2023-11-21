import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <header className="navbar-container">
      <Link to="/">
        <img src={"/img/logo.png"} alt="logo motoshop" />
      </Link>
      <h1>Tienda de Motos</h1>
      <nav>
        <ul>

          <li>
            <NavLink to="/">Home</NavLink>
          </li>

          <li>

            <NavLink to="categoria/3">Accesorios</NavLink>
          </li>

          <li>
            <NavLink to="categoria/2">Indumentaria</NavLink>
          </li>
          
        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar