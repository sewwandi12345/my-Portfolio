import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const NavbarContainer = styled.nav`
  width: 100%;
  background: linear-gradient(90deg, #1b0033 0%, #0b001a 100%);
  color: #fff;
  padding: 0.8rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 24px #1b003333;
`;

const Logo = styled.div`
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: #00e5ff;
  text-shadow: 0 0 8px #ff00ff;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 700px) {
    gap: 1rem;
    font-size: 1rem;
  }
`;

const NavLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    letter-spacing: 1px;
    transition: color 0.2s;
    &:hover {
      color: #00e5ff;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.2rem;

  a {
    color: #fff;
    font-size: 1.3rem;
    transition: color 0.2s, transform 0.2s;
    &:hover {
      color: #ff00ff;
      transform: scale(1.2);
    }
  }
`;

const Navbar = () => (
  <NavbarContainer>
    <Logo>Sewwandi</Logo>
    <NavLinks>
      <NavLink><a href="#home">Home</a></NavLink>
      <NavLink><a href="#about">About</a></NavLink>
      <NavLink><a href="#skills">Skills</a></NavLink>
      <NavLink><a href="#projects">Projects</a></NavLink>
      <NavLink><a href="#contact">Contact</a></NavLink>
    </NavLinks>
    <SocialLinks>
      <a href="https://github.com/sewwandi" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/chathurika-sewwandi-355b9634a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/chathurika.sewwandi.liyanage.2025?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
        <FaFacebook />
      </a>
    </SocialLinks>
  </NavbarContainer>
);

export default Navbar;