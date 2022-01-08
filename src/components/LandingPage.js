
import React from "react"
import {Link} from 'react-router-dom'
import '../styles/construction.css'
import '../styles/landing.css'

const LandingPage = () => {

  return (

    <div className="constructionWrapper">
      <div className="constructionContent">
        <div className="constructionHeader"> Coming Soon </div>
        <hr />
        <div className="questions">Questions? Email: contact@5ringspictures.com </div>
      </div>
    </div>

    // <div className="landingWrapper"> 
    //   <div className="landingContent">
    //     <div className="landingHeader"> 
    //       <div className="five"> 
    //         5
    //       </div>
    //       <div className="ringsPictures">
    //         <div> Rings </div>
    //         <div> Pictures </div>
    //       </div>
    //     </div>
    //     <hr />
    //     <div className="landingLinks"> 
    //       <Link to="About" className="landingLink"> About </Link>
    //       <Link to="Blog" className="landingLink"> Blog </Link>
    //       <Link to="Contact" className="landingLink"> Contact </Link>
    //     </div>
    //   </div>
    // </div>

  )
}

export default LandingPage;