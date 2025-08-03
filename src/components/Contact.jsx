import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Section = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%);
  padding: 4rem 1rem 2rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #232526;
  margin-bottom: 2rem;
`;

const InfoList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto 2rem auto;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.15rem;
  color: #4a4e69;
  justify-content: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1.5rem;
`;

const SocialIcon = styled.a`
  color: #4a90e2;
  font-size: 2rem;
  transition: color 0.2s;
  &:hover {
    color: #232526;
  }
`;

const Contact = () => (
  <Section id="contact">
    <Title>Contact</Title>
    <InfoList>
      <InfoItem><FaEnvelope /> sewchathurika0@gmail.com</InfoItem>
      <InfoItem><FaPhone /> +70 1451464</InfoItem>
    </InfoList>
    <SocialLinks>
      <SocialIcon href="https://www.facebook.com/chathurika.sewwandi.liyanage.2025?mibextid=ZbWKwL" target="_blank" rel="noopener" aria-label="Facebook"><FaFacebook /></SocialIcon>
      <SocialIcon href="https://github.com/sewwandi" target="_blank" rel="noopener" aria-label="GitHub"><FaGithub /></SocialIcon>
      <SocialIcon href="https://www.linkedin.com/in/chathurika-sewwandi-355b9634a" target="_blank" rel="noopener" aria-label="LinkedIn"><FaLinkedin /></SocialIcon>
    </SocialLinks>
  </Section>
);

export default Contact;
