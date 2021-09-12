import React, { Component } from "react"
import TopBar from "./components/TopBar"
import TopBarLinks from "./components/TopBarLinks"
import TopBarLink from "./components/TopBarLink"
import LandingPage from "./components/LandingPage"
//import Content from "./components/Content"
//import Footer from "./components/Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 100,
      footerHeight: 50
    }

    return (
      <div
        style={{
          backgroundColor: styles.black(0.05),
          minHeight: "100vh",
          position: "relative"
        }}
      >
        <TopBar styles={styles} />
        <LandingPage styles={styles} />
      </div>
    )
  }

}

export default App
