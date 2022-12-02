import React from 'react'
import '../index.css'
import { NavLink } from 'react-router-dom'
import CartContent from '../pages/CartContent'
import { useSelector } from 'react-redux'
const Navbar = ({productCount,productsData}) => {
  let [showCart,setShowCart]=React.useState(false);
  let products = useSelector(state => state.cart.products)

  console.log(products)
  console.log(Object.keys(products)[0])

  let array=[]
  array.push(Object.keys(products))
  console.log(array[0])

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
      <i class="fa-solid fa-cart-shopping" onClick={handleClick}><div className="countCart">{Object.keys(products).length}</div></i>
      <img src="../imges/104199376.jpg" alt="account-picture" />
      <div className={showCart?"cart":"cart-none"}>
          <h2>Cart</h2>
          <div className="con">
            {
              array[0].map(e=>
                <div className="content">
                <img src={productsData[e].image} alt="" className="cartImg" />
                    <div className="car-detil">
                        <div className="about-product">
                    <p>{productsData[e].title}</p>
                    <p>amouny{` x `}5 <h4>358{`$`}</h4></p>
                    </div>
                <i class="fa-solid fa-trash-can delete"></i>
                </div>
            </div>)
            }

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