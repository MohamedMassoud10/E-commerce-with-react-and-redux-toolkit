import React from 'react'
import { useParams, Link, Await } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect ,useState } from 'react';
import { removeFromCart, increaseAmount, decreaseAmount } from '../redux/cartSystem'
import { addToCart } from '../redux/cartSystem';
const SingleProductCart = ({productCount,setProductCount,productsData}) => {
let dispatch=useDispatch()
  let {id}=useParams();
  let products=productsData.filter(card=>card.id==id).map((card,index)=>(
    <div key={index} className="one-page">
      <div className="gallery">
      <img src={card.image} alt="" />
      </div>
      <div className="product-cart-section">
        <p className='companeName'>SNEAKERS COMPANY</p>
        <h1>{card.title}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquam quo? Cumque unde assumenda repellendus architecto</p>
        <h2>$ {card.price}</h2>
        <div className="addition">
          <div className="btns-inc-dec">
            <div className="inc" onClick={()=>dispatch(decreaseAmount(card.id))}>-</div>
            <div className="inc" onClick={()=>dispatch(increaseAmount(card.id))}>+</div>
          </div>
          <div className="button" onClick={()=>dispatch(addToCart(card.id))}><p>ADD TO CART</p></div>
        </div>
      </div>
    </div>
  ))
  return (
    <div className="container">
    <div>
      {products}
    </div>
    </div>
  )
}

export default SingleProductCart
