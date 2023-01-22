import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import { ItemListContainer } from './components/Container/itemListContainer/ItemListContainer'
//import './App.css'
import { CartContainer } from './components/Container/CartContainer/CartContainer';
import { ItemDetailContainer } from './components/Container/itemDetailContainer/itemDetailContainer';
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


//browser router es para poder usar todas las dffunciones de la aplicacion
//routes sirve para especificar los componentes de una vista o que van a tener una vista 
//route se usa para enlazar o unir una ruta con un componente 
//path es para que se escriba la ruta y vaya y con element va a la ruta 
// con * es para ir a cualquiera que noesta y le  ponemos to para ir 
// con / es la home
// link to = /card es para que escriba en el URL a donde quiere ir con link como en el navbar 
//NavLink es para el navegador
//NavLink  className={({ isActive}) => isActive ? 'btn btn-success' : 'btn btn-dark'} to='/categoria1'>
function App() {


  return (
    <>

      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer saludo={'En construccion..'} />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer saludo={'En construccion..'} />} />
          <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<CartContainer />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </BrowserRouter>
    </>
  )

}

export default App
