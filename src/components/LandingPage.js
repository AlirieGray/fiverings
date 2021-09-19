
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
      <Carousel showArrows={true} showThumbs={false} autoPlay={true} infiniteLoop={true}> 
        <div>
          <img src={imgOne} />
          <p className="legend">Item One</p>
        </div>
        <div>
          <img src={imgTwo}/>
          <p className="legend">Item Two</p>
        </div>
        <div>
          <img src={imgThree} />
          <p className="legend">Item Three</p>
        </div>
      </Carousel>

      <PortfolioLinks />
  
    </div>
  )
}

export default LandingPage;