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
                <div className="founderBioText"> {NewlineText(bio)} </div>
            </div>
        </div>
  )
}

function NewlineText(text) {
    const newText = text.split('\n').map(str => <p>{str}</p>);
    
    return newText;
  }

export default AboutPage;