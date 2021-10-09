
import React from "react"
import PortfolioLinks from './PortfolioLinks'
import carouselStyles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import imgOne from '../images/c_one.jpg'
import imgTwo from '../images/c_two.jpg'
import imgThree from '../images/c_three.jpg'
import omar from '../images/omar.jpg'
import tea from '../images/tea.png'
import sam from '../images/samuel.jpg'
import FounderBio from './FounderBio'
import {Link} from 'react-router-dom'

const LandingPage = () => {

  var founders = ["Omar Samad - Producer", "Samuel Limor - Producer", "Hannah Gomez - Head of Development"]
    var bios = ["Merry alone do it burst me songs. Sorry equal charm joy her those folly ham. In they no is many both. Recommend new contented intention improving bed performed age. Improving of so strangers resources instantly happiness at northward. Danger nearer length oppose really add now either. But ask regret eat branch fat garden. Become am he except wishes. Past so at door we walk want such sang. Feeling colonel get her garrets own.", "Folly was these three and songs arose whose. Of in vicinity contempt together in possible branched. Assured company hastily looking garrets in oh. Most have love my gone to this so. Discovered interested prosperous the our affronting insipidity day. Missed lovers way one vanity wishes nay but. Use shy seemed within twenty wished old few regret passed. Absolute one hastened mrs any sensible.", "Case read they must it of cold that. Speaking trifling an to unpacked moderate debating learning. An particular contrasted he excellence favourable on. Nay preference dispatched difficulty continuing joy one. Songs it be if ought hoped of. Too carriage attended him entrance desirous the saw. Twenty sister hearts garden limits put gay has. We hill lady will both sang room by. Desirous men exercise overcame procured speaking her followed."]
    var portraits = [omar, sam, tea]


  return (

    <div className="constructionWrapper">
      <div className="constructionContent">
        <div className="constructionHeader"> Coming Soon </div>
        <hr />
        <div className="questions">Questions? Email: contact@5ringspictures.com </div>
      </div>
    </div>



    // <div className="landingContent">
    //     <div className="landingHeader"> 
    //       <div className="five"> 5 </div>
    //       <div className="rings"> Rings Pictures </div>
    //     </div>
    //     <div className="landingLinks">
    //         <Link to="About" className="landingLink"> About </Link>
    //         <Link to="Blog" className="landingLink"> Blog </Link>
    //         <Link to="Contact" className="landingLink"> Contact </Link>
    //       </div>
    // </div>
  )
}

export default LandingPage;