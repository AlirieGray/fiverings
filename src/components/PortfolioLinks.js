import React from 'react'
import PortfolioLink from './PortfolioLink'
import linkImg from '../images/camera.png'

const PortfolioLinks = () => {
  var links = ['Portfolio Item 1', 'Portfolio Item 2', 'Portfolio Item 3', 'Portfolio Item 4']
  
  return (
    <div className='portfolioLinks'>
      <div className='portfolioLinksWrapper'>
        {links.map(function(name, index){
          return <PortfolioLink key={index} name={name} imgLink={linkImg}/>;
        })}
        </div>
    </div>
  )
}

export default PortfolioLinks;