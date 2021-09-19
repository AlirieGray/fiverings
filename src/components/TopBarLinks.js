import React from "react"
import TopBarLink from "./TopBarLink"

const TopBarLinks = () => {
  return (
    <div className="topBarLinks">
      <TopBarLink name="About"/>
      <TopBarLink name="Portfolio"/>
      <TopBarLink name="Blog"/>
      <TopBarLink name="Store"/>
      <TopBarLink name="Contact Us"/>
    </div>
  )
}

export default TopBarLinks;