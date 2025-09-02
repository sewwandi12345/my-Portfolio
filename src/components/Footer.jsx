import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const FooterContainer = styled.footer`
  background: linear-gradient(90deg, #1b0033 0%, #0b001a 100%);
  color: #fff;
  padding: 2rem 1rem 1rem 1rem;
  text-align: center;
  margin-top: auto;
  box-shadow: 0 -2px 24px #1b003333;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  a {
    color: #00e5ff;
    font-size: 1.7rem;
    transition: color 0.2s, transform 0.2s;
    &:hover {
      color: #ff00ff;
      transform: scale(1.2);
    }
  }
`;

const Copyright = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;

const Footer = () => (
  <FooterContainer>
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
    <Copyright>
      &copy; {new Date().getFullYear()} Sewwandi. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer;