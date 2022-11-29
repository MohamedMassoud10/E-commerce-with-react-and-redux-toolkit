import React from 'react'

export default function CartContent() {
  return (
    <div className="content">
        <img src="../imges/image-product-1.jpg" alt="" className="cartImg" />
            <div className="car-detil">
                <div className="about-product">
            <p>product title   </p>
            <p>amouny{` x `}5 <h4>358{`$`}</h4></p>
            </div>
        <i class="fa-solid fa-trash-can"></i>
        </div>
    </div>
  )
}
