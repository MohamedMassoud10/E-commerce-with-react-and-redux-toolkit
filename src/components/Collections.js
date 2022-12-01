import React from 'react'
import Cards from "./carts.json"
import Cart from './cart'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchProduct } from '../redux/cartSystem';
const Collections = () => {

  let Products=useSelector((state)=>state.Some);
  let dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(fetchProduct())
  }, []);


  let products=Products.map(e=>{
    return(
    <Cart img={e.image} title={e.title} price={e.price} id={e.id} key={e.id}/>
    )
  })
  return (
    <div className='carts-list'>
      {products}
    </div>
  )
}

export default Collections;
