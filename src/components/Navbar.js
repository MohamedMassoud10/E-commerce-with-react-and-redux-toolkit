import React from 'react'
import '../index.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../redux/cartSystem'
const Navbar = ({productsData}) => {
  let dispatch=useDispatch()
  let [showCart,setShowCart]=React.useState(false);
  let products = useSelector(state => state.cart.products)
  console.log(Object.keys(products))
  let array=[]
  array.push(Object.keys(products))
  function handleClick(){
    setShowCart((prevent=>!prevent))
  }
  return (
    <div className="navContainer">
    <div className='Nav-bar'>
      
      <div className="logo">
      <NavLink to="/"><img src="../imges/logo.svg" alt="logo" /></NavLink>
      <div className="ul">
      <ul>
        <li><NavLink to="collections">Collections</NavLink> </li>
        <li>Men </li>
        <li>Women </li>
        <li>About </li>
        <li>Contact </li>
      </ul>
    </div>
      </div>
      <i class="fa-solid fa-bars menu"></i>
      <div className="right-nav">
      <i class="fa-solid fa-cart-shopping" onClick={handleClick}><div className="countCart">{Object.keys(products).length}</div></i>
      <img src="../imges/104199376.jpg" alt="account-picture" />
      <div className={showCart?"cart":"cart-none"}>
          <h2>Cart</h2>
          <div className="con">
            {
              Object.keys(products).length>0?
              array[0].map(e=>
                <Link to={`/products-card/${e}`}>
                <div className="content">
                <img src={productsData[e-1].image} alt="" className="cartImg" />
                    <div className="car-detil">
                        <div className="about-product">
                    <p>{productsData[e].title}</p>
                    <p>{products[e]}{` x   `}<h4>{productsData[e].price}$</h4></p>
                    </div>
                <i class="fa-solid fa-trash-can delete" onClick={()=>dispatch(removeFromCart(productsData[e].e))}></i>
                </div>
            </div></Link>):<div className='empty-cart'>
              <p>Your cart is empty . </p>
            </div>
            }
          </div>
          <div className="button-div">
              <div className="button">
              Checkout
              </div>
          </div>
      </div>
      </div>
    </div>
    </div>
    )
}

export default Navbar