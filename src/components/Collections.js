import React from 'react'
import Cart from './cart'
import LoadingPage from '../pages/LoadingPage'
const Collections = ({productsData , Loading}) => {console.log(productsData)
  return (
    <div className="container">
    <div className='carts-list'>
      {Loading?productsData.map(e=>{
    return(
    <Cart img={e.image} title={e.title} price={e.price} id={e.id} key={e.id}/>
    )
  }):<LoadingPage/>}
    </div>
    </div>
  )
}

export default Collections;
