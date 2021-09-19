import React from "react"


const PortfolioLink = ({name, imgLink}) => {
  return (
    <div className="portfolioLink">
        <img className="linkImage" src={imgLink} />
       <p> {name} </p>
    </div>
  )
}

export default PortfolioLink;