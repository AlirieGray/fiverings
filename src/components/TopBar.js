import React from "react"
import TopBarLinks from "./TopBarLinks"
import {Link} from 'react-router-dom'
import Burger from './Burger'
import { useLocation } from 'react-router-dom'
import '../styles/nav.css'


const TopBar = () => {
  const location = useLocation()
  if (location.pathname == '/' || location.pathname == "/homeTestingLogoBike" || location.pathname == "/homeTesting" ) {
    return <div />
  }

  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <Link to="/homeTesting" className="logo"> 5 Rings Pictures </Link>
        <Burger />
        
      </div>
    </div>
  )
}

export default TopBar;