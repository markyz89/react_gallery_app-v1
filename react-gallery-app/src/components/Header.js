import React from 'react';
import Nav from './Nav';
import Search from './Search';


// this isn't doing much other than grouping two other components
const Header = (props) => {

    return (
        <React.Fragment>
            <Search updateImages = {props.updateImages} />
            <Nav />
        </React.Fragment>
    )
  }

export default Header;