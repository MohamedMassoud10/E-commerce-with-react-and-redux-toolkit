import React from 'react'
import Cards from "./carts.json"
import Cart from './cart'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { fetchProduct } from '../redux/cartSystem';
const Collections = ({productsData}) => {console.log(productsData)


  let products=productsData.map(e=>{
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
