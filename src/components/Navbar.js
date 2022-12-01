import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import CartContent from '../pages/CartContent'
//import { useSelector } from 'react-redux'
const Navbar = ({productCount}) => {
  let [showCart,setShowCart]=React.useState(false);
  //let {carts}=useSelector()
 // console.log(carts)
  function handleClick(){
    setShowCart((prevent=>!prevent))
  }
  return (
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
      <i class="fa-solid fa-cart-shopping" onClick={handleClick}><div className="countCart">{productCount}</div></i>
      <img src="../imges/104199376.jpg" alt="account-picture" />
      <div className={showCart?"cart":"cart-none"}>
          <h2>Cart</h2>
          {productCount>0?<div className="con">
          <CartContent/>
          <CartContent/>
          <CartContent/>
          <CartContent/>
          <div className="button-div">
              <div className="button">
              Checkout
              </div>
          </div>
          </div>
          :<div className="content">
            <p>You Cart is empty . </p>
          </div>}
      </div>
      </div>
    </div>
  )
}

export default Navbar
/**
 * top: 50%;
    position: absolute;
    left: 48%;
    transform: translate(-45%, -47%);
    display: flex;
    gap: 1.3rem;
    flex-direction: column;
    margin: 13px 0;
 */