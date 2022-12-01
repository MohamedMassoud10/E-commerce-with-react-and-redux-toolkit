import React from 'react';
import { Link } from 'react-router-dom'
const Cart = (props) => {
    return (
        <>
        
        <Link to={`/products-card/${props.title}`} className='product-card'>
            <img src={props.img} alt="product-image" className='product-image'/>
            <div className="cart-body">
            <div className="product-details">
                <div className="title">{props.title}</div>
                <div className="price">{props.price}{`$`}</div>
            </div>
          <Link to={`/products-card/${props.title}`}><div className="button">ADD TO CART</div></Link>
            </div>
        </Link>
        </>
    );
}

export default Cart;