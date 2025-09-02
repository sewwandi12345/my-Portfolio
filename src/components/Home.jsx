import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";

// ✨ Twinkle animation
const twinkle = keyframes`
  from { opacity: 0.3; }
  to { opacity: 1; }
`;

// 🔹 Background container for stars
const StarBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0; /* behind all content */
  overflow: hidden;
  pointer-events: none;
  background: radial-gradient(circle at 30% 30%, #1b0033, #0b001a 70%);
`;

// 🔹 Dynamic star component
const Star = styled.div`
  position: absolute;
  border-radius: 50%;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  background: ${(props) => props.color};
  opacity: ${(props) => props.opacity};
  animation: ${twinkle} ${(props) => props.duration}s linear infinite alternate;
  transform: translate3d(0,0,0);
`;

// 🔹 Main section
const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 5rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: #fff;
  z-index: 1;
`;

// 🔹 Avatar
const Avatar = styled.img`
  width: 220px;
  height: 220px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #ff00ff;
  box-shadow: 0 0 30px #ff00ff, 0 0 60px #ff00ff;
  margin-bottom: 2rem;
  transition: transform 0.3s ease;
  z-index: 2; /* above stars */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 40px #00e6ff, 0 0 80px #ff00ff;
  }
`;

// 🔹 Title and typing text
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  z-index: 2;

  span {
    color: #ff007f;
  }

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const TypingText = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #00e6ff;
  margin-bottom: 2rem;
  z-index: 2;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

// 🔹 Buttons
const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1.5rem;
  z-index: 2;
`;

const Button = styled.a`
  background: linear-gradient(90deg, #ff00ff, #00e6ff);
  color: #fff;
  padding: 0.8rem 1.6rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s;
  z-index: 2;

  &:hover {
    background: linear-gradient(90deg, #00e6ff, #ff00ff);
    transform: translateY(-3px);
    box-shadow: 0 0 20px #00e6ff;
  }
`;

// 🔹 Social icons
const SocialIcons = styled.div`
  display: flex;
  gap: 1.2rem;
  justify-content: center;
  margin-top: 2rem;
  z-index: 2;

  a {
    font-size: 1.8rem;
    color: #fff;
    transition: 0.3s;

    &:hover {
      color: #00e6ff;
      transform: scale(1.2);
    }
  }
`;

const Home = () => {
  const [stars, setStars] = useState([]);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const tempStars = [];
    const colors = ["#ffffff", "#ff77ff", "#77ffff", "#ffccff"];
    for (let i = 0; i < 500; i++) {
      tempStars.push({
        id: i,
        size: Math.random() * 2 + 1,
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.8 + 0.2,
        duration: Math.random() * 5 + 3,
        color: colors[Math.floor(Math.random() * colors.length)],
        depth: Math.random() * 0.05 + 0.01,
      });
    }
    setStars(tempStars);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Section id="home">
      {/* Background stars behind content */}
      <StarBackground>
        {stars.map((star) => (
          <Star
            key={star.id}
            size={star.size}
            top={star.top}
            left={star.left}
            opacity={star.opacity}
            duration={star.duration}
            color={star.color}
            style={{
              transform: `translate3d(${mouse.x * star.depth * 100}px, ${mouse.y * star.depth * 100}px, 0)`,
            }}
          />
        ))}
      </StarBackground>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ position: "relative", zIndex: 2 }}
      >
        <Avatar src="/New-image.jpg" alt="Avatar" />
        <Title>
          Hello, I am <span>A.L.C. Sewwandi</span>
        </Title>
        <TypingText>
          <Typewriter
            words={[
              "IT Student 💻",
              "React Developer ⚛️",
              "UI/UX Enthusiast 🎨",
              "Future Full-Stack Engineer 🚀",
            ]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </TypingText>
        <ButtonGroup>
          <Button href="/A.L.C.S.pdf" download>
            Download CV
          </Button>
          <Button href="#contact">Contact Me</Button>
        </ButtonGroup>

        <SocialIcons>
          <a
            href="https://github.com/sewwandi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/chathurika-sewwandi-355b9634a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/94761801313"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/chathurika.sewwandi.liyanage.2025?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </SocialIcons>
      </motion.div>
    </Section>
  );
};

export default Home;
