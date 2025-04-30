import React, { useState,useEffect } from 'react';
import About from './About';
import Projects from './projects';

const Portfolio  = () => {
  const [currentIndex, setCurrentIndex] = useState("home");  


useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [currentIndex]);





  return (
  <div className="app">
          {/* Header */}
          <header className="header">
            <div className="logo">Ibrahim Kocak</div>
            <nav>
              <ul className="nav-links">
                <li><button onClick={() => setCurrentIndex("home")}>Home</button></li>
                <li><button onClick={() => setCurrentIndex("projekts")}>Projekts</button></li>
                <li><button onClick={() => setCurrentIndex("about")}>Über mich</button></li>
              </ul>
            </nav>
          </header>
        
        {currentIndex === "home" && ( 
          
        <div className='home'>
          <section id="home" className="hero">
            <div className="hero-text">
              <h1>Hi, ich bin Ibrahim Kocak</h1>
              <p>Ich bin auf der Suche nach einer Ausbildung zum Fachinformatiker für Anwendungsentwicklung – hier findest du meine Projekte und Informationen, wie du mich erreichen kannst</p>
            
            </div>
            <img src="BewerbungsBild.png" alt="Ibrahim Kocak" className="hero-image" />
          </section>

          {/* About Me Section */}
          <section id="about" className="about">
            <h2>Über mich</h2>
            <ul>
              <li>Ich bin 22 Jahre alt und auf der Suche nach einer Ausbildung als Fachinformatiker für Anwendungsentwicklung. In den letzten Jahren habe ich mir eigenständig fundierte Kenntnisse in der Programmierung angeeignet, insbesondere mit JavaScript, HTML und CSS. Derzeit erweitere ich mein Wissen und lerne React, um moderne und leistungsfähige Anwendungen zu entwickeln.
              </li>

              <li>Mein Ziel ist es, in einer praxisorientierten Ausbildung meine Fähigkeiten als Entwickler weiter auszubauen und in der Anwendungsentwicklung anzuwenden. Dabei liegt mein Fokus auf der Erstellung vielseitiger Softwarelösungen, die sowohl funktional als auch benutzerfreundlich sind. Ich freue mich darauf, meine Erfahrungen in einem professionellen Umfeld einzubringen und mich weiter zu entwickeln.
              </li>

              <a href="#about" onClick={() => setCurrentIndex("about")} className="btn">Mehr über mich</a>
            </ul>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects">
            <h2>Meine Projekte</h2>
            <div className="project-grid">
              <ProjectCard title="Quiz-App" description="Eine App, die quizze beinhaltet." image="quizze.png" />
              <div className="project-card Display-Flex">
              <a href="#projects" onClick={() => setCurrentIndex("projekts")} className="btn projectLink">Mehr über meine Projekte</a>
              </div>
            </div>
          </section>
        </div>)}

        {currentIndex === "about" && <About />}
        {currentIndex === "projekts" && <Projects />}
        
      

          
          {/* Footer */}
          <footer className="footer">
            © 2025 Ibrahim Kocak | Alle Rechte vorbehalten
          </footer>
  </div>
  );
};



export const ProjectCard = ({ title, description, image, link, linkDescription }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {link && linkDescription && (
        <a className="btn" href={link}>
          {linkDescription}
        </a>
      )}
    </div>
  );
};


export default Portfolio ;
