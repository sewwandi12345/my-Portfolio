import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: 'Inter', Arial, Helvetica, sans-serif;
    background: #f8f9fa;
    color: #222;
    min-height: 100vh;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </AppContainer>
  );
}

export default App;
