import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%);
  padding: 4rem 1rem 2rem 1rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const AccentCircle = styled.div`
  position: absolute;
  top: -120px;
  left: -120px;
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, #4a90e2 0%, #e0eafc 100%);
  opacity: 0.18;
  border-radius: 50%;
  z-index: 0;
`;

const AccentCircle2 = styled.div`
  position: absolute;
  bottom: -100px;
  right: -100px;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, #f8fafc 0%, #4a90e2 100%);
  opacity: 0.13;
  border-radius: 50%;
  z-index: 0;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: 700;
  color: #232526;
  letter-spacing: 2px;
  animation: ${fadeIn} 1.2s cubic-bezier(.77,0,.18,1) 0.1s both;
  text-shadow: 0 2px 16px rgba(191,233,255,0.10);
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  color: #4a90e2;
  margin-bottom: 2rem;
  animation: ${fadeIn} 1.2s cubic-bezier(.77,0,.18,1) 0.3s both;
  text-shadow: 0 1px 8px rgba(191,233,255,0.10);
`;

const Avatar = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-bottom: 2rem;
  box-shadow: 0 4px 32px rgba(74,144,226,0.18);
  border: 4px solid #fff;
  animation: ${fadeIn} 1.2s cubic-bezier(.77,0,.18,1) 0.5s both;
`;

const InfoCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(74, 78, 105, 0.10);
  padding: 2.5rem 2rem 2rem 2rem;
  max-width: 420px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  position: relative;
`;

const Home = () => (
  <Section id="home">
    <AccentCircle />
    <AccentCircle2 />
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <InfoCard>
        <Avatar src="/aa.jpg" alt="Avatar" />
        <Title>Hello, I'm A.L.C.Sewwandi</Title>
        <Subtitle>I'm an IT Student</Subtitle>
        <p style={{ color: '#4a4e69', fontSize: '1.1rem', marginTop: '1.2rem', marginBottom: 0 }}>
          Passionate about technology, coding, and creative problem-solving.<br />
          Seeking opportunities to grow as a developer and make a positive impact.
        </p>
      </InfoCard>
    </motion.div>
  </Section>
);

export default Home;
