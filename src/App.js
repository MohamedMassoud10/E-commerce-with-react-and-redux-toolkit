import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProductCart from './pages/SingleProductCart'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Collections from './components/Collections'
import { useState ,useEffect } from 'react'
function App() {

  const [productsData, setProductsData] = useState({})

  console.log(productsData)
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => setProductsData(data));
  }, [])

  let [productCount,setProductCount]=React.useState(0)
  return (
    <div className='container'>
    <Navbar productCount={productCount} productsData={productsData} />
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/collections' element={<Collections productsData={productsData}/>}></Route>
      <Route  path='/products-card/:id' element={<SingleProductCart productCount={productCount} setProductCount={setProductCount} productsData={productsData}/>}></Route>
      <Route  path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  )
}

export default App
