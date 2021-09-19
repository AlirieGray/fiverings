import React, { Component } from "react"
import TopBar from "./components/TopBar"
import TopBarLinks from "./components/TopBarLinks"
import TopBarLink from "./components/TopBarLink"
import LandingPage from "./components/LandingPage"
import AboutPage from "./components/AboutPage"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
//import Content from "./components/Content"
//import Footer from "./components/Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <Switch> 
        <div className="contentWrapper">
          <TopBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </Switch>
    )
  }

}

export default App
