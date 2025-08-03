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
  letter-spacing: 2px;
  text-shadow: 0 2px 16px rgba(191,233,255,0.10);
`;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: center;
    gap: 3rem;
  }
`;

const Photo = styled.img`
  width: 220px;
  height: auto;
  border-radius: 18px;
  object-fit: contain;
  box-shadow: 0 4px 32px rgba(74,144,226,0.18);
  border: 4px solid #fff;
  background: #f8fafc;
`;

const Text = styled.div`
  color: #4a4e69;
  font-size: 1.2rem;
  max-width: 500px;
  text-align: left;
`;

const About = () => (
  <Section id="about">
    <Title>About Me</Title>
    <Flex>
      <Photo src="/aa.jpg" alt="A.L.C.Sewwandi" />
      <Text>
        <strong>Hi, I'm A.L.C.Sewwandi!</strong>
        <br /><br />
        Motivated IT student currently pursuing HND in Information Technology at SLIATE, with strong foundational skills in JavaScript, Java, React, and MySQL.
        <br /><br />
        I am seeking a Software Engineering Internship to apply my practical knowledge, contribute to real-world projects, and grow as a full-stack developer.
      </Text>
    </Flex>
  </Section>
);

export default About;
