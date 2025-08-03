import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  background: linear-gradient(120deg, #f8fafc 0%, #e0eafc 100%);
  padding: 4rem 1rem 2rem 1rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #232526;
  margin-bottom: 2rem;
  letter-spacing: 2px;
  text-shadow: 0 2px 8px #e0eafc;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-items: center;
  margin-bottom: 2rem;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px) scale(1.04); }
  100% { transform: translateY(0); }
`;

const SkillCard = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(74, 78, 105, 0.10);
  padding: 2rem 1rem 1.5rem 1rem;
  width: 100%;
  max-width: 200px;
  font-weight: 600;
  color: #232526;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: box-shadow 0.2s, transform 0.2s, background 0.2s;
  animation: ${float} 3s ease-in-out infinite;
  position: relative;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 32px rgba(74, 144, 226, 0.18);
    transform: scale(1.05);
    background: linear-gradient(120deg, #e0eafc 0%, #f8fafc 100%);
  }
`;

const Icon = styled.img`
  width: 48px;
  height: 48px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 2px 8px #e0eafc);
`;

const SkillName = styled.div`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const SkillDesc = styled.div`
  font-size: 0.95rem;
  color: #6c6f7b;
`;

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Modern UI library' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', desc: 'ES6+ & TypeScript' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Backend JavaScript' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', desc: 'OOP & Enterprise Apps' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', desc: 'Relational Database' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'NoSQL Database' },
  { name: 'Styled-Components', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/styledcomponents/styledcomponents-plain.svg', desc: 'CSS-in-JS' },
  { name: 'Vite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg', desc: 'Fast tooling' },
  { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg', desc: 'UI/UX Design' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', desc: 'Version Control' },
  { name: 'Framer Motion', icon: '/src/assets/framer-motion.svg', desc: 'Animations' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', desc: 'Semantic Markup' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', desc: 'Modern CSS' },
  { name: 'UI/UX', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg', desc: 'User Experience' },
];

const Skills = () => (
  <Section id="skills">
    <Title>Skills</Title>
    <SkillsGrid>
      {skills.map(skill => (
        <SkillCard key={skill.name}>
          <Icon src={skill.icon} alt={skill.name} />
          <SkillName>{skill.name}</SkillName>
          <SkillDesc>{skill.desc}</SkillDesc>
        </SkillCard>
      ))}
    </SkillsGrid>
  </Section>
);

export default Skills;
