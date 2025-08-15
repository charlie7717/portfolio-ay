import React, { useState } from 'react';
import './App.css';

// Import components
import Header from './components/Header';
import Navigation from './components/Navigation';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import PersonalProject from './components/sections/PersonalProject';
import Certifications from './components/sections/Certifications';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About />;
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'personalproject':
        return <PersonalProject />;
      case 'certifications':
        return <Certifications />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400">
      <div className="container max-w-6xl mx-auto p-5">
        <Header />
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
        
        <div className="transition-all duration-500 ease-in-out">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}

export default App;

