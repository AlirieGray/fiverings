import React from "react"
import {Link} from 'react-router-dom'

const TopBarLink = ({ name }) => {


  return (
    <div className="topBarLink">
        <Link to={`${name}`}  className="nav-link" > {name}</Link>
    </div>
  )
}

export default TopBarLink;