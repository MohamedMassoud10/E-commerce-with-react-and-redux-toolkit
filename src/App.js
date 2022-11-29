import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProductCart from './pages/SingleProductCart'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Collections from './components/Collections'
import Cards from "./components/carts.json"
function App() {
  let [productCount,setProductCount]=React.useState(0)
  return (
    <div className='container'>
    <Navbar productCount={productCount}/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/collections' element={<Collections/>}></Route>
      <Route  path='/products-card/:title' element={<SingleProductCart props={Cards} productCount={productCount} setProductCount={setProductCount}/>}></Route>
      <Route  path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  )
}

export default App
