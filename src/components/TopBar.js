import React from "react"
import TopBarLinks from "./TopBarLinks"
import {Link} from 'react-router-dom'

const TopBar = () => {
  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <Link to="/" className="logo"> 5 Rings Pictures </Link>
        <TopBarLinks  />
      </div>
    </div>
  )
}

export default TopBar;