import React from 'react'
import PortfolioLink from './PortfolioLink'
import linkImgOne from '../images/apple.png'
import linkImgTwo from '../images/cat.png'
import linkImgThree from '../images/tea.png'
import linkImgFour from '../images/duck.png'

const PortfolioLinks = () => {
  var links = ['Portfolio Item 1', 'Portfolio Item 2', 'Portfolio Item 3', 'Portfolio Item 4']
  var imgLinks = [linkImgOne, linkImgTwo, linkImgThree, linkImgFour]

  return (
    <div className='portfolioLinks'>
      <div className='portfolioLinksWrapper'>
        {links.map(function(name, index){
          return <PortfolioLink key={index} name={name} imgLink={imgLinks[index]}/>;
        })}
        </div>
    </div>
  )
}

export default PortfolioLinks;