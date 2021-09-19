import React from "react"
import TopBarLinks from "./TopBarLinks"

const TopBar = () => {


  return (
    <div className="topBar">
      <div className="topBarWrapper">
        <div className="logo"> Five Rings Pictures </div>
        <TopBarLinks  />
      </div>
    </div>
  )
}

export default TopBar;