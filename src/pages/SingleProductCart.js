import React from 'react'
import { useParams, Link, Await } from 'react-router-dom'
import { addtocart } from '../redux/slices';
const SingleProductCart = ({props,productCount,setProductCount,dispatch}) => {
  let {id}=useParams();
  let handleIncClick=()=>{
    setProductCount(productCount+1)

    // dispatch(addtocart(card));
  }

  let handleDncClick=()=>{
    if(productCount>0){
      setProductCount(productCount-1)
    }
  }
  let products=props.filter(card=>card.id==id).map((card,index)=>(
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
            <div className="inc" onClick={handleDncClick}>-</div>
            <div className="num">{productCount}</div>
            <div className="inc" onClick={handleIncClick}>+</div>
          </div>
          <div className="button" onClick={()=>dispatch(addtocart(card))}><p>ADD TO CART</p></div>
        </div>
      </div>
    </div>
  ))
  return (
    <div>
      {products}
    </div>
  )
}

export default SingleProductCart
