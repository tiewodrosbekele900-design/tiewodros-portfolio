import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Tiewodros Bekele | IT Specialist & Artist";
    
    // Add smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e: Event) => {
        e.preventDefault();
        
        const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;