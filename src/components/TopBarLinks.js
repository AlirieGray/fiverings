import React from "react"
import TopBarLink from "./TopBarLink"

const TopBarLinks = ({ styles }) => {
  const topBarLinksStyle = {
    display: "flex",
    justifyContent: "space-between",
  }

  return (
    <div style={topBarLinksStyle}>
      <TopBarLink styles={styles} name="About"/>
      <TopBarLink styles={styles} name="Portfolio"/>
      <TopBarLink styles={styles} name="Blog"/>
      <TopBarLink styles={styles} name="Store"/>
      <TopBarLink styles={styles} name="Contact Us"/>
    </div>
  )
}

export default TopBarLinks;