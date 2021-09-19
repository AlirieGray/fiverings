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

    return (
      <div className="contentWrapper">
        <TopBar  />
        <LandingPage />
      </div>
    )
  }

}

export default App
