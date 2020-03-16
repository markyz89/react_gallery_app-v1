import React from 'react';
import { Link } from 'react-router-dom'

// Not much changed here from the HTML, a tags became Links, that's about it.
const Nav = (props) => {
    return (
      <nav className="main-nav">
          <ul>
            <li><Link to="/cats" >Cats</Link></li>
            <li><Link to="/dogs">Dogs</Link></li>
            <li><Link to="/babies">Babies</Link></li>
          </ul>
        </nav>
    )
  }

  export default Nav;