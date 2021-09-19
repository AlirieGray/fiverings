
import React from "react"
import { Carousel } from 'react-responsive-carousel'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgOne from '../images/c_one.jpg'
import imgTwo from '../images/c_two.jpg'
import imgThree from '../images/c_three.jpg'

const LandingPage = ({ styles }) => {


  return (
    <div className="landingContent">
      {/* <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}> 
        <div>
          <img src={imgOne} />
          <p className="legend">Legend One</p>
        </div>
        <div>
          <img src={imgTwo}/>
          <p className="legend">Legend Two</p>
        </div>
        <div>
          <img src={imgThree} />
          <p className="legend">Legend Three</p>
        </div>
      </Carousel> */}
    </div>
  )
}

export default LandingPage;