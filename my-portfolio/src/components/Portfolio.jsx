import React, { useState, useEffect } from 'react';
import About from './About';
import Projects from './projects';
import Projectdetails from './Projectdetails';

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState("home");  
  const [projectdetails, setProjectdetails] = useState(false); 
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);


  

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

      {currentIndex === "projekts" && !projectdetails && (
      <Projects onOpenDetails={(index) => {
        setSelectedProjectIndex(index);
        setProjectdetails(true);
      }} />
    )}
{projectdetails && selectedProjectIndex !== null && (
  <Projectdetails
    title={contents[selectedProjectIndex].title}
    image={contents[selectedProjectIndex].image}
    text={contents[selectedProjectIndex].text}
    alt={contents[selectedProjectIndex].alt}
    css={contents[selectedProjectIndex].css}
    onBack={() => setProjectdetails(false)}
    
  />
)}




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
    text: <><h3> Interaktive Quiz-App mit React</h3><p>Als mein erstes React-Projekt habe ich eine eigenständige Quiz-Applikation entwickelt, die auf Multiple-Choice-Fragen basiert. Nutzer können Fragen beantworten und erhalten direktes Feedback zu ihrer Auswahl. Die Fragen werden zufällig gemischt und das Quiz läuft in einer kontrollierten Abfolge ab.</p><h3>Technologien & Konzepte</h3><p>Die App nutzt useState und useEffect, um Benutzerinteraktion, dynamisches Rendering und Logik wie das Mischen der Fragen umzusetzen.</p> <h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/React-Quiz-App' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='w' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
    alt: 'Quiz-App',
    css: 'img'
  },
  {
    title: 'My Portfolio',
    image: 'Portfolio.png',
    text: <><h3>Portfolio - Persönliche Website</h3> <p>Dieses Portfolio dient als persönliche Webvisitenkarte. Es zeigt meine bisherigen Projekte, vermittelt einen Überblick über meine Fähigkeiten und bietet eine direkte Möglichkeit zur Kontaktaufnahme</p><p>Die Seite wurde mit React umgesetzt und spiegelt meine aktuelle Kompetenz im Bereich moderner Frontend-Technologien wider. Besonders wichtig war mir dabei, nicht nur ein optisch sauberes Ergebnis zu erzielen, sondern auch eine klare Struktur und sinnvolle Navigation. Besucher finden eine kurze Vorstellung meiner Person, einen Einblick in meine Programmierlogik und Zugriff auf ausgewählte Projekte, die meine Fortschritte und meinen Stil zeigen.</p><p>Was das Portfolio besonders macht, ist seine Einfachheit: Es ist übersichtlich gehalten, ohne unnötige Spielereien – der Fokus liegt auf Inhalt und Klarheit. Gleichzeitig ist es aber technisch sauber umgesetzt und modular aufgebaut, was mir erlaubt, jederzeit neue Inhalte oder Features hinzuzufügen, ohne das Gesamtsystem zu stören.</p>  <h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/My-Portfolio' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='w' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
    alt: 'Bild von Projekt 2'
  },
  {
      title: 'Calculator',
      image: 'Calculator2.png',
      text: <><h3>Calculator Einfacher Web-Taschenrechner</h3><p>Der Taschenrechner ist eine eigenständig entwickelte Webanwendung, die grundlegende mathematische Operationen wie Addition, Subtraktion, Multiplikation, Division sowie Prozentrechnung unterstützt. Dabei lag der Fokus auf einer klaren Benutzeroberfläche und der direkten Umsetzung der Logik mit reinem JavaScript, ohne zusätzliche Frameworks. Durch gezielte DOM-Manipulation wird jede Benutzereingabe sofort verarbeitet, das Ergebnis in Echtzeit dargestellt und die Bedienung intuitiv gestaltet. Das Projekt zeigt nicht nur mein Verständnis für JavaScript, sondern auch meine Fähigkeit, praktische Anwendungen eigenständig von Grund auf umzusetzen.</p><h3>Technologien & Konzepte</h3><p>HTML, CSS, JavaScript (Vanilla JS), der Berechnung von mathematischen Ausdrücken und einem übersichtlichen, benutzerfreundlichen Interface.</p><h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/Calculator' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='w' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
      alt: 'Bild von Projekt 2',
      css: 'img'
  },
  {
      title: 'Tic Tac Toe',
      image: 'TicTacTo.png',
      text: <><h3>Tic Tac Toe</h3><p>Dieses Tic-Tac-Toe-Spiel wurde mit HTML, CSS und JavaScript umgesetzt und bietet eine einfache, interaktive Möglichkeit, das beliebte Spiel im Browser zu spielen. Der Schwerpunkt lag auf der Entwicklung eines klaren, reaktiven Spielfelds, bei dem das Hover-Verhalten visuelles Feedback liefert und die Spielerinteraktionen dynamisch gesteuert werden. Es wechselt automatisch zwischen den Symbolen "X" und "Kreis" und verhindert doppelte Züge durch gezieltes Event-Handling. Das Projekt zeigt mein Verständnis für Event Listener, DOM-Manipulation und grundlegende Spiellogik, die ohne externe Bibliotheken realisiert wurde.</p> <h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/Tic-Tac-Toe' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='w' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
      alt: 'Bild von Projekt 2'
  },
  {
      title: 'To do list',
      image: 'To do list.png',
      text: <><h3>To do list</h3><p>Dies ist mein erstes selbst entwickeltes Webprojekt – eine To-Do-Liste mit Kalenderfunktion. Die Anwendung erlaubt es Nutzerinnen und Nutzern, Aufgaben für bestimmte Tage oder Monate zu speichern und zwischen Tages- und Monatsansicht zu wechseln. Eine Besonderheit ist der integrierte Dark Mode, der das Design der App mit einem einfachen Umschalter anpasst. Zusätzlich gibt es separate Bereiche für Benutzerinformationen, eine Aufgaben-Historie und eine einfache, visuell unterstützte Aufgabenverwaltung, inklusive einer Möglichkeit, Aufgaben als erledigt zu markieren oder zu löschen. Die Benutzeroberfläche wurde responsiv gestaltet, sodass sie auch auf mobilen Geräten nutzbar ist. Mit diesem Projekt konnte ich erste praktische Erfahrungen in HTML, CSS und JavaScript sammeln.</p><h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/To-do-list-' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='w' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
      alt: 'Bild von Projekt 2',
      css: 'img'
  }

];

export default Portfolio;
