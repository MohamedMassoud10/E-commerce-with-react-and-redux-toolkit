import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useState,useRef,useEffect } from 'react'
const Home = () => {
  let  carouselRef=useRef()
  let [width,setWidth]=useState(0)
  useEffect(()=>{
    setWidth(carouselRef.current.scrollWidth -carouselRef.current.offsetWidth)
  },[])


  return (<>
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
    <div>
      <motion.div className='carousel' ref={carouselRef}>
          <motion.div drag="x" dragConstraints={{right:0 ,left: -width}} className='inner-carousel'>
          
          <motion.div className='item'>
                  <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp" alt="slider-images"/>
                  <div className="caption">
                    <div className="catoName">
                    <Link to="/"><h3>Wireless Headphone</h3></Link>
                    </div>
                  </div>
          </motion.div>
          <motion.div className='item'>
                  <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp" alt="slider-images"/>
                  <div className="caption">
                    <div className="catoName">
                    <Link to="/"><h3>Wireless Headphone</h3></Link>
                    </div>
                  </div>
          </motion.div>
          <motion.div className='item'>
                  <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png.webp" alt="slider-images"/>
                  <div className="caption">
                    <div className="catoName">
                      <Link to="/"><h3>Wireless Headphone</h3></Link>
                    </div>
                  </div>
          </motion.div>
          <motion.div className='item'>
                  <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide1.png.webp" alt="slider-images"/>
                  <div className="caption">
                    <div className="catoName">
                    <Link to="/"><h3>Wireless Headphone</h3></Link>
                    </div>
                  </div>
          </motion.div>
          <motion.div className='item'>
                  <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide2.png.webp" alt="slider-images"/>
                  <div className="caption">
                    <div className="catoName">
                    <Link to="/"><h3>Wireless Headphone</h3></Link>
                    </div>
                  </div>
          </motion.div>
          <motion.div className='item'>
                  <img src="https://preview.colorlib.com/theme/aroma/img/home/hero-slide3.png.webp" alt="slider-images"/>
                  <div className="caption">
                    <div className="catoName">
                    <Link to="/"><h3>Wireless Headphone</h3></Link>
                    </div>
                  </div>
          </motion.div>
          </motion.div>
      </motion.div>
    </div>
    <footer>
      <div className="footer-title">
        <p>Copyright ©2022 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i>  by Mohamed Massoud</p>
      </div>
    </footer>
    </>
  )
}

export default Home
