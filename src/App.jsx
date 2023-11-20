import React from 'react';
import Contador from './Components/Contador/Contador';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './Context/carritoContext';
import './App.css';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';

const App = () => {
  return (
    <>
      <BrowserRouter>
      <CarritoProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}/>
          <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
          <Route path='/item/:idItem' element={<ItemDetailContainer />} />
          <Route path='/cart'element={<Cart/>}/>
          <Route path='/checkout'element={<Checkout/>}/>
          <Route path='*' element={<h2>Sitio en Construccion</h2>}/>
        </Routes>
        </CarritoProvider>               
      </BrowserRouter>
    </>
  )
}

export default App
