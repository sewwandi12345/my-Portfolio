import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  width: 100%;
  background: linear-gradient(90deg, #232526 0%, #414345 100%);
  box-shadow: 0 2px 16px rgba(0,0,0,0.10);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 2.5rem;
`;

const Logo = styled.a`
  font-size: 2rem;
  font-weight: bold;
  color: #f8fafc;
  letter-spacing: 2px;
  text-decoration: none;
  background: linear-gradient(90deg, #ff6e7f 0%, #bfe9ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const NavLink = styled.a`
  color: #e0eafc;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  letter-spacing: 1px;
  padding: 0.3rem 0.7rem;
  border-radius: 8px;
  transition: background 0.2s, color 0.2s, box-shadow 0.2s;
  &:hover {
    background: linear-gradient(90deg, #ff6e7f 0%, #bfe9ff 100%);
    color: #232526;
    box-shadow: 0 2px 8px rgba(255,110,127,0.10);
  }
`;

const Navbar = () => (
  <Nav>
    <NavContainer>
      <Logo href="#home">Sewwandi</Logo>
      <NavLinks>
        <li><NavLink href="#home">Home</NavLink></li>
        <li><NavLink href="#skills">Skills</NavLink></li>
        <li><NavLink href="#projects">Projects</NavLink></li>
        <li><NavLink href="#experience">Experience</NavLink></li>
        <li><NavLink href="#about">About</NavLink></li>
        <li><NavLink href="#contact">Contact</NavLink></li>
      </NavLinks>
    </NavContainer>
  </Nav>
);

export default Navbar;
