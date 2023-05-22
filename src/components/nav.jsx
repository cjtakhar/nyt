import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './styles/nav.css';

const NavBar = () => {
  return (
    <Navbar className="navBar">
      <Link to="/nyt" className="navLink">
        <Navbar.Brand className="navBrand">NYT</Navbar.Brand>
      </Link>
    </Navbar>
  );
};

export default NavBar;
