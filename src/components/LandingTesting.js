
import React from "react"
import {Link} from 'react-router-dom'
import '../styles/construction.css'
import '../styles/landingTesting.css'
import logoImg from '../images/LOGO4.jpg'
import logoImgTwo from '../images/LOGO1.jpg'
import { useLocation } from 'react-router-dom'

const LandingTesting = () => {
  const location = useLocation()
  var imgSrc = logoImg;

  if (location.pathname == "/homeTestingLogoBike") {
    imgSrc = logoImgTwo;
  }
  return (

    <div className="landingWrapper"> 
      <div className="landingContent">
        <div className="landingHeader"> 
            <img className="landingLogo" src={imgSrc}></img>
        </div>
        <hr />
        <div className="landingLinks"> 
          <Link to="AboutTesting" className="landingLink"> About </Link>
          <Link to="Blog" className="landingLink"> Blog </Link>
          <Link to="ContactTesting" className="landingLink"> Contact </Link>
        </div>
      </div>
    </div>

  )
}

export default LandingTesting;