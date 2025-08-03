import React from 'react';
import styled from 'styled-components';

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

const Timeline = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 600px;
`;

const Item = styled.li`
  position: relative;
  padding-left: 2.5rem;
  margin-bottom: 2rem;
  text-align: left;
  color: #4a4e69;
  &:before {
    content: '';
    position: absolute;
    left: 0.7rem;
    top: 0.5rem;
    width: 1rem;
    height: 1rem;
    background: #4a90e2;
    border-radius: 50%;
    box-shadow: 0 0 0 4px #e0eafc;
  }
`;

const Year = styled.span`
  font-weight: bold;
  color: #4a90e2;
  margin-right: 1rem;
`;

const Experience = () => (
  <Section id="experience">
    <Title>Experience</Title>
    <Timeline>
      <Item><Year>2024–2025</Year> Front-End Developer at Creative Studio</Item>
      <Item><Year>2022–2024</Year> UI Engineer at Webify</Item>
      <Item><Year>2020–2022</Year> Junior Developer at StartApp</Item>
      <Item><Year>2018–2020</Year> Computer Science BSc, University of Example</Item>
    </Timeline>
  </Section>
);

export default Experience;
