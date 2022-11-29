import React from 'react'
import Cards from "./carts.json"
import Cart from './cart'
const Collections = () => {
  let products=Cards.map(e=>{
    return(
    <Cart img={e['img']} title={e.title} price={e.price}/>
    )
  })
  return (
    <div className='carts-list'>
      {products}
    </div>
  )
}

export default Collections;
