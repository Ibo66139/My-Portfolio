import React, { useState, useEffect } from 'react';
import About from './About';
import Projects from './projects';
import Projectdetails from './Projectdetails';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState("home");  
  const [projectdetails, setProjectdetails] = useState(false); // Kleingeschrieben, keine Namenskollision

  

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
            <li><button onClick={() => setCurrentIndex("home")}><b>Home</b></button></li>
            <li><button onClick={() => setCurrentIndex("projekts")}><b>Projekts</b></button></li>
            <li><button onClick={() => setCurrentIndex("about")}><b>Über mich</b></button></li>
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
              <li>
                Ich bin 22 Jahre alt und auf der Suche nach einer Ausbildung als Fachinformatiker für Anwendungsentwicklung...
              </li>
              <li>
                Mein Ziel ist es, in einer praxisorientierten Ausbildung meine Fähigkeiten weiter auszubauen...
              </li>
              <a href="#about" onClick={() => setCurrentIndex("about")} className="btn">Mehr über mich</a>
            </ul>
          </section>

          {/* Projects Section */}
          <section id="projects" className="projects">
            <h2>Meine Projekte</h2>
            <div className="project-grid">
              <ProjectCard
                title="Quiz-App"
                description="Eine App, die quizze beinhaltet."
                image="quizze.png"
                
              />
              <div className="project-card Display-Flex">
                <a href="#projects" onClick={() => setCurrentIndex("projekts")} className="btn projectLink">Mehr über meine Projekte</a>
              </div>
            </div>
          </section>
        </div>
      )}

      {currentIndex === "about" && <About />}
      {currentIndex === "projekts" && <Projects onOpenDetails={() => setProjectdetails(true)} />}

      {projectdetails && <Projectdetails  />} {/* Zeigt nur, wenn true */}

      {/* Footer */}
      <footer className="footer">
        © 2025 Ibrahim Kocak | Alle Rechte vorbehalten
      </footer>
    </div>
  );
};

export const ProjectCard = ({ title, description, image, onClickDetails }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {onClickDetails && (
    <a className="btn" href="#details" onClick={(e) => {
    e.preventDefault();
    onClickDetails(); // <-- sagt Portfolio: "Zeig Details an!"
    }}>
    Mehr Details
    </a>
    )}
    </div>
  );
};

const contents = [
  {
    title: 'Quiz-App',
    image: 'QuizApp.png',
    text: 'Beschreibung für Projekt 1',
    alt: 'Quiz-App'
  },
  {
    title: 'My Portfolio',
    image: 'Portfolio.png',
    text: 'Beschreibung für Projekt 2',
    alt: 'Bild von Projekt 2'
  },
  {
      title: 'Calculator',
      image: 'Calculator2.png',
      text: 'Beschreibung für Projekt 2',
      alt: 'Bild von Projekt 2'
  },
  {
      title: 'Tic Tac Toe',
      image: 'TicTacTo.png',
      text: 'Beschreibung für Projekt 2',
      alt: 'Bild von Projekt 2'
  },
  {
      title: 'To do list',
      image: 'To do list.png',
      text: 'Beschreibung für Projekt 2',
      alt: 'Bild von Projekt 2'
  }

];

export default Portfolio;
