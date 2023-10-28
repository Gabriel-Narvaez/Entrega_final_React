import './CartWidget.css';

const CartWidget = () => {
  
  return (
    <div className="cart-widget">
      <img className='imagenCarrito' src="/img/carrito.png" alt="imagen de carrito" />
      <strong className='cart-count'>3</strong>
    </div>
  )
}

export default CartWidget