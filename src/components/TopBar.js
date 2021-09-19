import React from "react"
import TopBarLinks from "./TopBarLinks"
import {Link} from 'react-router-dom'
import Burger from './Burger'

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <Link to="/" className="logo"> 5 Rings Pictures </Link>
        <Burger />
        
      </div>
    </div>
  )
}

export default TopBar;