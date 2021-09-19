import React from "react"

const AboutPage = ({name, bio, imgSrc}) => {

    return (
        <div className="founderBio"> 
            <img className="portrait" src={imgSrc} />
            <div>
                <div className="founderBioHeader"> {name} </div>
                <div className="founderBio"> {bio} </div>
            </div>
        </div>
  )
}

export default AboutPage;