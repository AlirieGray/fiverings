import React, { Component } from "react"
import TopBar from "./components/TopBar"
import TopBarLinks from "./components/TopBarLinks"
import TopBarLink from "./components/TopBarLink"
import LandingPage from "./components/LandingPage"
import LandingTesting from "./components/LandingTesting"
import AboutPage from "./components/AboutPage"
import ContactPage from './components/ContactPage'
// import PortfolioPage from './components/PortfolioPage'
// import BlogPage from './components/BlogPage'
import { Route, Switch } from "react-router-dom/cjs/react-router-dom";
import Footer from "./components/Footer"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {

    return (
      <Switch> 
        <div>
          <TopBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homeTesting" component={LandingTesting} />
          <Route exact path="/homeTestingLogoBike" component={LandingTesting} />
          <Route exact path="/aboutTesting" component={AboutPage} />
          <Route exact path="/contactTesting" component={ContactPage} />
          {/* <Route exact path="/portfolio" component={PortfolioPage} /> */}
          {/* <Route exact path="/blog" component={BlogPage} />  */}
          <Footer />
        </div>
      </Switch>
    )
  }

}

export default App
