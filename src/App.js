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
  const [Loading, setLoading] = useState(false)

  console.log(productsData)
    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => setProductsData(data));
  setLoading(true)
  }, [])

  let [productCount,setProductCount]=React.useState(0)
  return (
    <div className='container'>
    <Navbar productsData={productsData} />
    <div className="allScreen">
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/collections' element={<Collections productsData={productsData} Loading={Loading}/>}></Route>
      <Route  path='/products-card/:id' element={<SingleProductCart productCount={productCount} setProductCount={setProductCount} productsData={productsData}/>}></Route>
      <Route  path='*' element={<Error/>}></Route>
    </Routes>
    </div>
    </div>
  )
}

export default App
