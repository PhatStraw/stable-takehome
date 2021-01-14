import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';
import '../styles/header.css'


const Header = () => {
  return (
    <div>
      <Navbar color="light" className='navStyles' light expand="md">
        <NavbarBrand href="/"><img className='iconStyles' src='https://s3-us-west-2.amazonaws.com/usestable.com-assets/logos/stable-logo.svg'/></NavbarBrand>
      </Navbar>
    </div>
  );
}

export default Header;
