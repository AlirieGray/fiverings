import React from "react"

const TopBarLink = ({ styles, name }) => {
  const topBarLinkStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: 10,
    fontSize: 15,
    color: styles.white(0.7),
    fontWeight: 'normal',
  }

  return (
    <div style={topBarLinkStyle}>
        {name}
    </div>
  )
}

export default TopBarLink;