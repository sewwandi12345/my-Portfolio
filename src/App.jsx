import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Home from './components/Home';
import ProjectsDemo from './components/ProjectsDemo';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";


import 'bootstrap/dist/css/bootstrap.min.css';


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
      <ProjectsDemo />
      <About />
    
      <Contact />
      <Footer/>
      
    </AppContainer>
  );
}

export default App;
