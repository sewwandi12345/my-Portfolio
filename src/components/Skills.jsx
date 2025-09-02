import React from 'react';
import styled, { keyframes } from 'styled-components';

const Section = styled.section`
  background: linear-gradient(180deg, #0b001a 0%, #1a0033 100%);
  padding: 5rem 2rem;
  text-align: center;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.7rem;
  margin-bottom: 3rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  text-shadow: 0 0 12px #ff00ff, 0 0 24px #00e6ff;

  span {
    color: #ff00ff;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const float = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px) scale(1.05); }
  100% { transform: translateY(0); }
`;

const SkillCard = styled.div`
  background: rgba(20, 20, 40, 0.85);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  width: 100%;
  max-width: 200px;
  font-weight: 600;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${float} 5s ease-in-out infinite;
  transition: all 0.3s ease;
  border: 2px solid rgba(255, 0, 255, 0.4);
  box-shadow: 0 0 12px rgba(255, 0, 255, 0.4),
              0 0 24px rgba(0, 230, 255, 0.2);

  &:hover {
    transform: scale(1.07);
    border-color: #00e6ff;
    box-shadow: 0 0 18px #00e6ff, 0 0 36px #ff00ff;
    background: rgba(30, 0, 50, 0.95);
  }
`;

const Icon = styled.img`
  width: 54px;
  height: 54px;
  margin-bottom: 1rem;
  filter: drop-shadow(0 0 8px rgba(0, 230, 255, 0.6));
`;

const SkillName = styled.div`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  color: #00e6ff;
  font-weight: bold;
`;

const SkillDesc = styled.div`
  font-size: 0.9rem;
  color: #ccc;
  text-align: center;
`;

const skills = [
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Modern UI library' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', desc: 'Frontend Framework' },
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
    <Title>
      My <span>Skills</span>
    </Title>
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
