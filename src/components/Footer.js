import React from "react"
import { useLocation } from 'react-router-dom'
import '../styles/footer.css'

const Footer = () => {
  const location = useLocation()
  if (location.pathname == '/' || location.pathname == "/homeTesting" || location.pathname == "/homeTestingLogoBike") {
    return <div />
  }

  return (
    <div className="footer">
      <div className="footerContainer"> 
        <div className="footerLeft"> 
          <div className="footerLogo"> 5 Rings Pictures</div>
          <div> © 2021 5 Rings Pictures </div>
        </div>
        <div className="socialLinks"> 
          <div style={{marginBottom: "10px", color: "rgba(255,255,255,.6)"}}> SOCIAL </div>
          <div> Blog </div>
          <div> Twitter </div>
          <div> Facebook </div>
          <div> Instagram </div>
          <div> YouTube </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;