import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
      <div className="header sticky">
            <Navbar.Brand href="#home">
                <img src="/Design_Assets/Logo.png" className="logo" alt="logo"/>
            </Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Product</Nav.Link>
                <Nav.Link href="#home">Solution</Nav.Link>
                <Nav.Link href="#home">Pricing</Nav.Link>
                <Nav.Link href="#home">Customer Stories</Nav.Link>
                <Nav.Link href="#home">Resources</Nav.Link>
            </Nav>
            <div className="header-group">
                <button className="request-demo">Request A Demo</button>
                <a className="sign-in" href="#home"><FontAwesomeIcon icon={faSignInAlt} className="icon"/></a>
            </div>
        
    </div>

  );
}

export default Header;
