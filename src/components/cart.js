import React from 'react';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSystem';
const Cart = (props) => {
    let dispatch=useDispatch()
    return (
        <>
        
        <Link to={`/products-card/${props.id}`} className='product-card' key={props.id}>
            <img src={props.img} alt="product-image" className='product-image'/>
            <div className="cart-body">
            <div className="product-details">
                <div className="title">{props.title}</div>
                <div className="price">{props.price}{`$`}</div>
            </div>
          <Link to={`/products-card/${props.id}`}><div className="button" onClick={()=>dispatch(addToCart(props.id))}>ADD TO CART</div></Link>
            </div>
        </Link>
        </>
    );
}

export default Cart;