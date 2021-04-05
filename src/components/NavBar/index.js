import React, {useState} from 'react';
import {Nav,Branding, Logo} from './styles';

export const NavBar = () => {
  const [hover, setHover] = useState(false);
  const hoverNavBar = ()=> {
    window.scrollY <= 0
      ? setHover(false)
      : setHover(true);
  }

    return (
      <Nav>
        <Branding
          href="#"
          className="navbar-brand"
        >
          Home
        </Branding>
      </Nav>
    );
}
