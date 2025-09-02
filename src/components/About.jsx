import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  background: linear-gradient(180deg, #0b001a 0%, #1a0033 100%);
  padding: 5rem 2rem;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #fff;
  text-shadow: 0 0 12px #ff00ff, 0 0 24px #00e6ff;

  span {
    color: #ff00ff;
  }
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 4rem;
  }
`;

const Photo = styled.img`
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ff00ff;
  box-shadow: 0 0 30px #ff00ff, 0 0 60px #00e6ff;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px #00e6ff, 0 0 80px #ff00ff;
  }
`;

const Text = styled.div`
  font-size: 1.1rem;
  max-width: 520px;
  line-height: 1.8;
  text-align: left;
  color: #d1d1e0;

  strong {
    color: #0a0227;
    font-size: 1.3rem;
  }
`;

const About = () => (
  <Section id="about">
    <Title>
      About <span>Me</span>
    </Title>
    <Flex>
      <Photo src="/New-image.jpg" alt="A.L.C. Sewwandi" />
      <Text>
        <strong>Hi, I'm A.L.C. Sewwandi!</strong>
        <br /><br />
        Motivated IT student currently pursuing HND in Information Technology at SLIATE, 
        with strong foundational skills in <span style={{color:"#00e6ff"}}>JavaScript</span>, 
        <span style={{color:"#ff00ff"}}> Java</span>, <span style={{color:"#00e6ff"}}>React</span>, 
        and <span style={{color:"#ff00ff"}}>MySQL</span>.
        <br /><br />
        I am seeking a <span style={{color:"#00e6ff"}}>Software Engineering Internship</span> 
        to apply my practical knowledge, contribute to real-world projects, 
        and grow as a full-stack developer.
      </Text>
    </Flex>
  </Section>
);

export default About;
