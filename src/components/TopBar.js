import React from "react"
import TopBarLinks from "./TopBarLinks"
// import TopBarLink from "./TopBarLink"

const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.black(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 30px",
    boxSizing: "border-box",
    color: styles.white(.9),
    fontSize: 24
  }

  return (
    <div style={topBarStyle}>
      <h1> Five Rings Pictures </h1>
      <TopBarLinks styles={styles} />
    </div>
  )
}

export default TopBar;