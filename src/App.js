import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProductCart from './pages/SingleProductCart'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Collections from './components/Collections'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../src/redux/cartSystem';
function App() {

  let Products=useSelector((state)=>state.Some);

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, []);


  let [productCount,setProductCount]=React.useState(0)
  return (
    <div className='container'>
    <Navbar productCount={productCount}/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/collections' element={<Collections/>}></Route>
      <Route  path='/products-card/:id' element={<SingleProductCart dispatch={dispatch} props={Products} productCount={productCount} setProductCount={setProductCount}/>}></Route>
      <Route  path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  )
}

export default App
