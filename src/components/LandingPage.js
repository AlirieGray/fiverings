
import React from "react"
import { Carousel } from 'react-responsive-carousel'
import PortfolioLinks from './PortfolioLinks'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgOne from '../images/c_one.jpg'
import imgTwo from '../images/c_two.jpg'
import imgThree from '../images/c_three.jpg'

const LandingPage = () => {


  return (
    <div className="landingContent">
      <Carousel showArrows={true} showThumbs={false} autoPlay={true}  infiniteLoop={true} > 
        <div>
          <img src={imgOne} className="carouselImg" />
          <p className="legend">ITEM ONE</p>
        </div>
        <div>
          <img src={imgTwo} className="carouselImg"/>
          <p className="legend">ITEM TWO</p>
        </div>
        <div>
          <img src={imgThree} className="carouselImg" />
          <p className="legend">ITEM THREE</p>
        </div>
      </Carousel>

      <PortfolioLinks />
  
    </div>
  )
}

export default LandingPage;