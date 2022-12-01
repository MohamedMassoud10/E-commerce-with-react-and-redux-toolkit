import React from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom'
import { fetchProduct } from '../redux/cartSystem';


const SingleProductCart = ({props,productCount,setProductCount}) => {

  let products=useSelector((state)=>state.products)
  
  console.log(products)

  let dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProduct())
  }, []);



  
  let {title}=useParams();
  let handleIncClick=()=>{
    setProductCount(productCount+1)
  }
  let handleDncClick=()=>{
    if(productCount>0){
      setProductCount(productCount-1)
    }
  }
  return (
    <div>
      {props.filter(card=>card.title==title).map((card,index)=>(
        <div key={index} className="one-page">
          <div className="gallery">
          <img src={card[`img`]} alt="" />
          </div>
          <div className="product-cart-section">
            <p className='companeName'>SNEAKERS COMPANY</p>
            <h1>{card.title}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, aliquam quo? Cumque unde assumenda repellendus architecto</p>
            <h2>$ {card.price}</h2>
            <div className="addition">
              <div className="btns-inc-dec">
                <div className="inc" onClick={handleDncClick}>-</div>
                <div className="num">{productCount}</div>
                <div className="inc" onClick={handleIncClick}>+</div>
              </div>
              <div className="button" onClick={handleIncClick}><p>ADD TO CART</p></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default SingleProductCart
