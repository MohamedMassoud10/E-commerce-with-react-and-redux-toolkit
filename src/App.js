import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SingleProductCart from './pages/SingleProductCart'
import Error from './pages/Error'
import Navbar from './components/Navbar'
import Collections from './components/Collections'
import { useState ,useEffect } from 'react'
import { useDispatch ,useSelector } from 'react-redux'
import { fetchProducts } from './redux/product-silce'
function App() {
  let products=useSelector((state)=>state)
  const [productsData, setProductsData] = useState({})
  const [Loading, setLoading] = useState(false)
  let dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchProducts)
  })

    useEffect(() => {
      fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => setProductsData(data));
  setLoading(true)
  }, [])
  return (<>
  <Navbar productsData={productsData} />
    <div className="allScreen">
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route  path='/collections' element={<Collections productsData={productsData} Loading={Loading}/>}></Route>
      <Route  path='/products-card/:id' element={<SingleProductCart productsData={productsData}/>}></Route>
      <Route  path='*' element={<Error/>}></Route>
    </Routes>
    </div>
  </>)
}

export default App
