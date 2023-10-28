import { useState } from 'react';
import Contador from '../Contador/Contador';
import { Link } from 'react-router-dom';
import './ItemDetail.css'

const ItemDetail = ({ id, nombre, stock, precio, img, descripcion }) => {
 
  const [agregarCantidad, setAgregarCantidad] = useState(0);

 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }


  return (
    <div className='contenedorItem'>
      <h2>{nombre} </h2>
      <h3>Precio: $ {precio} </h3>
      <h3>ID: {id} </h3>
      <img src={img} alt={nombre} />
      <p>Descripción: {descripcion}</p>

      {
        //Acá empleamos la lógica de montaje y desmontaje del contador
      }

      {
        agregarCantidad > 0 ? (<Link to="/cart">Terminar Compra</Link>) : (<Contador inicial={1} stock={stock} funcionAgregar={manejadorCantidad}/>)
      }



    </div>
  )
}

export default ItemDetail