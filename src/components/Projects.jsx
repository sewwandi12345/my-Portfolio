import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: linear-gradient(135deg, #f8fafc 0%, #e0eafc 100%);
  padding: 4rem 1rem 2rem 1rem;
  text-align: center;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #232526;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  animation: ${fadeIn} 1.2s cubic-bezier(.77,0,.18,1) 0.1s both;
  text-shadow: 0 2px 16px rgba(191,233,255,0.10);
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 2rem 1rem;
  width: 320px;
  min-height: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  animation: ${fadeIn} 1.2s cubic-bezier(.77,0,.18,1) 0.2s both;
  &:hover {
    transform: translateY(-8px) scale(1.03) rotate(-1deg);
    box-shadow: 0 8px 32px rgba(74, 144, 226, 0.18);
    background: linear-gradient(120deg, #e0eafc 0%, #f8fafc 100%);
  }
`;

const ProjectTitle = styled.h3`
  color: #232526;
  margin-bottom: 0.5rem;
`;

const ProjectDesc = styled.p`
  color: #4a4e69;
  font-size: 1rem;
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

const projects = [
  {
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'MENTAL HEALTH WEBSITE',
    desc: 'Awareness platform with user resources and support features.'
  },
  {
    img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'PORTFOLIO WEBSITE',
    desc: 'Personal branding website showcasing skills and projects.'
  },
  {
    img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
    title: 'POINT OF SALE (POS) SYSTEM',
    desc: 'Desktop application for sales management.'
  },
  {
    img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80',
    title: 'QUIZ GAME',
    desc: 'Interactive web-based quiz using JavaScript.'
  },
  {
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'VILLAGE TRAVEL WEBSITE',
    desc: 'Travel guide with images, maps, and tourist info.'
  },
  {
    img: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80',
    title: 'CALCULATOR APP',
    desc: 'A simple and modern calculator application.'
  },
];

const Projects = () => (
  <Section id="projects">
    <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
      <Title>Projects</Title>
    </motion.div>
    <ProjectsGrid>
      {projects.map((project, i) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 + i * 0.15 }}
        >
          <ProjectCard>
            <ProjectImg src={project.img} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDesc>{project.desc}</ProjectDesc>
          </ProjectCard>
        </motion.div>
      ))}
    </ProjectsGrid>
  </Section>
);

export default Projects;
