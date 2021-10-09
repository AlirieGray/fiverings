import React from "react"

const AboutPage = ({name, bio, title, imgSrc}) => {

    return (
        <div className="founderBio"> 
            <img className="portrait" src={imgSrc} />
            <div>
                <div className="founderBioHeader"> 
                    <div> 
                        {name} 
                    </div> 
                    <div className="title"> 
                        {title} 
                    </div>
                </div>
                <div className="founderBio"> {bio} </div>
            </div>
        </div>
  )
}

export default AboutPage;