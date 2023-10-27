import { useState, useEffect } from 'react';
import { getProductos } from '../../asyncmock';
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  useEffect(() => {
    getProductos()
      .then(respuesta => setProductos(respuesta))
      .catch(error => console.log(error))

  }, [])


  return (
    <>
      <h2>Mis Productos</h2>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer