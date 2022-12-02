import React from 'react'
import Cart from './cart'
import Loading from '../pages/Loading'

const Collections = ({productsData , Loading}) => {console.log(productsData)
  return (
    
    <div className='carts-list'>
      {Loading?productsData.map(e=>{
    return(
    <Cart img={e.image} title={e.title} price={e.price} id={e.id} key={e.id}/>
    )
  }):<Loading/>}
    </div>
  )
}

export default Collections;
