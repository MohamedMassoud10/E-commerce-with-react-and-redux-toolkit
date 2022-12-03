import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div className='homeBody'>
      <div className="overLay"></div>
      <div class="text">
        <div class="content">
          <h2>
          SNEAKERS is fun
          </h2>
          <h1>BROWSE OUR PREMIUM PRODUCT</h1>
          <p>Us which over of signs divide dominion deep fill bring they're meat beho upon own earth without morning over third. Their male dry. They are great appear whose land fly grass.</p>
          <Link to="collections" className="button">Browse Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
