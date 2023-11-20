import { useContext } from 'react';
import { CarritoContext } from '../../Context/carritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  return (
    <div>
      <Link to="/cart">
        <img className='imagenCarrito' src="/img/carrito.png" alt="imagen de carrito" />
        {cantidadTotal > 0 && <strong> {cantidadTotal}</strong>}
      </Link>

    </div>
  )
}

export default CartWidget