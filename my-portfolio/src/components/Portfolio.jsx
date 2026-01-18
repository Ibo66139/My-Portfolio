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
    {!projectdetails && (
  <header className="header">
    <div className="logo">Ibrahim Kocak</div>
    <nav>
      <ul className="nav-links">
        <li><button onClick={() => setCurrentIndex("home")}><b>Home</b></button></li>
        <li><button onClick={() => setCurrentIndex("projekts")}><b>Projekte</b></button></li>
        <li><button onClick={() => setCurrentIndex("about")}><b>Über mich</b></button></li>
      </ul>
    </nav>
  </header>
)}


      {currentIndex === "home" && (
        <div className='home'>
          <section id="home" className="hero">
            <div className="hero-text">
              <h1>Hi, ich bin Ibrahim Kocak</h1>
              <p>Ich bin auf der Suche nach einem Einstieg in den IT Bereich. Auf dieser Seite findest du meine Projekte sowie Informationen zu meinen Kenntnissen und Kontaktmöglichkeiten.</p>
            </div>
            <img src="BewerbungsBild.png" alt="Ibrahim Kocak" className="hero-image" />
          </section>

          {/* About Me Section */}
          <section id="about" className="about">
            <div>
            <h2>Über mich</h2>
            <ul>
              <li>
                Ich bin 22 Jahre alt und arbeite sehr gerne mit Computern. In meiner Freizeit bringe ich mir selbst das Programmieren bei und beschäftige mich intensiv mit IT Themen.
              </li>
              <li>
                Mein Ziel ist es, meine Fähigkeiten in einer praxisorientierten Ausbildung weiter auszubauen.
              </li>
                <li>
                Seit einigen Jahren beschäftige ich mich intensiv mit Hardware, Software und IT Systemen. Neben meinem eigenen Computer, den ich vollständig selbst zusammengestellt habe, habe ich auch mehrere Systeme für Freunde eingerichtet und optimiert.Dabei konnte ich meine Kenntnisse über Hardwarekomponenten wie Mainboards, Prozessoren und Netzwerke erweitern und habe gelernt, wie wichtig präzises Arbeiten sowie ein systematisches Vorgehen für stabile und funktionale Systeme sind.
              </li>
                <li>
                Diese Tätigkeiten bereiten mir große Freude und haben mein Interesse an einem beruflichen Einstieg im IT Bereich weiter bestärkt, da ich mich leidenschaftlich für Technik, Software und Elektronik interessiere und bereits erste praktische Erfahrungen im Zusammenstellen und Reparieren von Computersystemen sammeln konnte.
              </li>
              <a href="#about" onClick={() => setCurrentIndex("about")} className="btn">Mehr über mich</a>
            </ul>
         </div>
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

      {currentIndex === "about" && (
  <About setCurrentIndex={setCurrentIndex} />
)}


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
        © 2026 Ibrahim Kocak | Alle Rechte vorbehalten
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
    text: <><h3> Interaktive Quiz App mit React</h3><p>Als mein erstes React Projekt habe ich eine eigenständige Quiz Applikation entwickelt, die auf Multiple Choice Fragen basiert. Nutzer können Fragen beantworten und erhalten direktes Feedback zu ihrer Auswahl. Die Fragen werden zufällig gemischt und das Quiz läuft in einer kontrollierten Abfolge ab.</p><h3>Technologien & Konzepte</h3><p>Die App nutzt useState und useEffect, um Benutzerinteraktion, dynamisches Rendering und Logik wie das Mischen der Fragen umzusetzen.</p> <h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/React-Quiz-App' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='https://melodic-hotteok-f7510b.netlify.app' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
    alt: 'Quiz-App',
    css: 'img'
  },

  {
    title: 'Zusammenbau mehrerer PCs',
    image: 'pc-img.jpeg',
    text: <><h3>Desktop Hardware</h3><p>Ich habe eigenständig mehrere Desktop und PCs geplant und zusammengebaut. Dabei habe ich zunächst die benötigten Komponenten ausgewählt und deren Kompatibilität geprüft (z. B. Mainboard, CPU, RAM, Grafikkarte, Netzteil und Speicher). Nach der Bestellung habe ich die Systeme fachgerecht montiert und in Betrieb genommen.</p><h3>Vorgehensweise:</h3><ul className='ul-project-card'><li>Analyse der Anforderungen (Leistung, Einsatzbereich)</li><li>Prüfung der Kompatibilität der Hardware Komponenten</li><li>Zusammenbau der Hardware</li><li>Erststart, BIOS Kontrolle und Installation des Betriebssystems</li><li>Installation notwendiger Treiber und grundlegende Funktionstests</li></ul><h3>Erlernte Fähigkeiten:</h3><ul  className='ul-project-card '><li>Hardware Kenntnisse und PC Architektur</li><li>Verständnis für Kompatibilität und Stromversorgung</li><li>Sorgfältige und strukturierte Arbeitsweise</li><li>Grundlagen der Fehleranalyse bei Hardwareproblemen</li></ul></>,
    alt: 'pc-img.jpeg',
    css: 'img'
  },
  {
    title: 'Laptop Aufrüstung mit M.2 SSD',
    image: 'laptophw.jpeg',
    text: <><h3>Laptop Hardware</h3><p>Da ich mit der Speicherleistung meines Laptops nicht zufrieden war, habe ich diesen selbstständig aufgerüstet. Ziel war eine deutliche Verbesserung von Geschwindigkeit und Speicherkapazität.</p><h3>Vorgehensweise:</h3><ul className='ul-project-card'><li>Recherche zur vorhandenen Hardware und Schnittstellen</li><li>Auswahl einer kompatiblen M.2 SSD</li><li>Fachgerechter Einbau der SSD</li><li>Einrichtung des Speichers und Anpassung des Systems</li></ul><h3>Erlernte Fähigkeiten:</h3><ul className='ul-project-card '><li>Kenntnisse über moderne Speichertechnologien (M.2 / SSD)</li><li>Sorgfalt beim Arbeiten an mobiler Hardware</li><li>Planung und Durchführung von Hardware Upgrades</li><li>Leistungsoptimierung von Systemen</li></ul></>,
    alt: 'Laptop',
    css: 'img'
  },

  {
    title: 'Reparatur und Wartung eines Snackautomaten',
    image: 'Snack-img.jpeg',
    text: <><h3>Snackautomaten</h3><p>Ich betreibe einen eigenen Snackautomaten und bin vollständig für dessen technische Funktionsfähigkeit verantwortlich. Da der Automat regelmäßig genutzt wird, kam es häufiger zu technischen Störungen, die ich selbstständig analysiert und behoben habe.</p><h3>Vorgehensweise:</h3><ul><li>Eigenständige Fehlersuche bei mechanischen und elektrischen Problemen</li><li>Messung von Spannung und Stromfluss zur Überprüfung der Stromversorgung</li><li>Identifikation defekter oder fehlerhafter Kabelverbindungen</li><li>Neuverkabelung und Instandsetzung einzelner Komponenten</li><li>Funktionstests nach jeder Reparatur</li></ul><h3>Erlernte Fähigkeiten:</h3><ul><li>Praktische Grundlagen der Elektrotechnik</li><li>Systematische und strukturierte Fehleranalyse</li><li>Verantwortungsbewusster Umgang mit elektrischen Anlagen</li><li>Selbstständiges Arbeiten und Übernahme technischer Verantwortung</li></ul></>,
    alt: 'Quiz-App',
    css: 'img'
  },

  {
    title: 'Einrichtung und Betrieb von Minecraft und ARK Servern',
    image: 'database.png',
    text: <><h3>Einrichtung und Betrieb von Minecraft und ARK: Survival Evolved Servern</h3><p>Ich habe eigenständig mehrere Game Server, darunter Minecraft sowie ARK: Survival Evolved, eingerichtet, konfiguriert und betrieben, um gemeinsam mit Freunden zu spielen. Dabei war ich für den technischen Betrieb, die Stabilität und die Performance der Server verantwortlich.</p><h3>Vorgehensweise:</h3><ul><li>Installation und Konfiguration der jeweiligen Server Software</li><li>Einrichtung und Verwaltung von Mods, Plugins und Servereinstellungen</li><li>Konfiguration von Benutzerrechten und Zugriffen</li><li>Überwachung der Serverleistung und Anpassung der Ressourcen</li><li>Fehleranalyse und Behebung von Verbindungs , Performance oder Mod Problemen</li></ul><h3>Erlernte Fähigkeiten:</h3><ul><li>Grundlagen der Serveradministration</li><li>Verständnis von Client Server Architekturen</li><li>Grundkenntnisse in Netzwerkstrukturen (Ports, Verbindungen, Latenz)</li><li>Strukturierte Problemlösung und technisches Troubleshooting</li><li>Verantwortungsbewusster Betrieb eines Systems für mehrere Nutzer</li></ul></>,
    alt: 'Quiz-App',
    css: 'img'
  },


  {
    title: 'My Portfolio',
    image: 'Portfolio.png',
    text: <><h3>Portfolio  Persönliche Website</h3> <p>Dieses Portfolio dient als persönliche Webvisitenkarte. Es zeigt meine bisherigen Projekte, vermittelt einen Überblick über meine Fähigkeiten und bietet eine direkte Möglichkeit zur Kontaktaufnahme</p><p>Die Seite wurde mit React umgesetzt und spiegelt meine aktuelle Kompetenz im Bereich moderner Frontend Technologien wider. Besonders wichtig war mir dabei, nicht nur ein optisch sauberes Ergebnis zu erzielen, sondern auch eine klare Struktur und sinnvolle Navigation. Besucher finden eine kurze Vorstellung meiner Person, einen Einblick in meine Programmierlogik und Zugriff auf ausgewählte Projekte, die meine Fortschritte und meinen Stil zeigen.</p><p>Was das Portfolio besonders macht, ist seine Einfachheit: Es ist übersichtlich gehalten, ohne unnötige Spielereien der Fokus liegt auf Inhalt und Klarheit. Gleichzeitig ist es aber technisch sauber umgesetzt und modular aufgebaut, was mir erlaubt, jederzeit neue Inhalte oder Features hinzuzufügen, ohne das Gesamtsystem zu stören.</p>  <h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/My-Portfolio' target="_blank" rel="noopener noreferrer">Quellcode</a></div></>,
    alt: 'Bild von Projekt 2'
  },
  {
      title: 'Calculator',
      image: 'Calculator2.png',
      text: <><h3>Calculator Einfacher Web Taschenrechner</h3><p>Der Taschenrechner ist eine eigenständig entwickelte Webanwendung, die grundlegende mathematische Operationen wie Addition, Subtraktion, Multiplikation, Division sowie Prozentrechnung unterstützt. Dabei lag der Fokus auf einer klaren Benutzeroberfläche und der direkten Umsetzung der Logik mit reinem JavaScript, ohne zusätzliche Frameworks. Durch gezielte DOM Manipulation wird jede Benutzereingabe sofort verarbeitet, das Ergebnis in Echtzeit dargestellt und die Bedienung intuitiv gestaltet. Das Projekt zeigt nicht nur mein Verständnis für JavaScript, sondern auch meine Fähigkeit, praktische Anwendungen eigenständig von Grund auf umzusetzen.</p><h3>Technologien & Konzepte</h3><p>HTML, CSS, JavaScript (Vanilla JS), der Berechnung von mathematischen Ausdrücken und einem übersichtlichen, benutzerfreundlichen Interface.</p><h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/Calculator' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='https://beautiful-puppy-b6d9e6.netlify.app' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
      alt: 'Bild von Projekt 2',
      css: 'img'
  },
  {
      title: 'Tic Tac Toe',
      image: 'TicTacTo.png',
      text: <><h3>Tic Tac Toe</h3><p>Dieses Tic Tac Toe Spiel wurde mit HTML, CSS und JavaScript umgesetzt und bietet eine einfache, interaktive Möglichkeit, das beliebte Spiel im Browser zu spielen. Der Schwerpunkt lag auf der Entwicklung eines klaren, reaktiven Spielfelds, bei dem das Hover Verhalten visuelles Feedback liefert und die Spielerinteraktionen dynamisch gesteuert werden. Es wechselt automatisch zwischen den Symbolen "X" und "Kreis" und verhindert doppelte Züge durch gezieltes Event Handling. Das Projekt zeigt mein Verständnis für Event Listener, DOM Manipulation und grundlegende Spiellogik, die ohne externe Bibliotheken realisiert wurde.</p> <h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/Tic-Tac-Toe' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='https://deluxe-tanuki-d5db2a.netlify.app' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
      alt: 'Bild von Projekt 2'
  },
  {
      title: 'To do list',
      image: 'To do list.png',
      text: <><h3>To do list</h3><p>Dies ist mein erstes selbst entwickeltes Webprojekt eine To Do Liste mit Kalenderfunktion. Die Anwendung erlaubt es Nutzerinnen und Nutzern, Aufgaben für bestimmte Tage oder Monate zu speichern und zwischen Tages und Monatsansicht zu wechseln. Eine Besonderheit ist der integrierte Dark Mode, der das Design der App mit einem einfachen Umschalter anpasst. Zusätzlich gibt es separate Bereiche für Benutzerinformationen, eine Aufgaben Historie und eine einfache, visuell unterstützte Aufgabenverwaltung, inklusive einer Möglichkeit, Aufgaben als erledigt zu markieren oder zu löschen. Die Benutzeroberfläche wurde responsiv gestaltet, sodass sie auch auf mobilen Geräten nutzbar ist. Mit diesem Projekt konnte ich erste praktische Erfahrungen in HTML, CSS und JavaScript sammeln.</p><h3>Projekt</h3> <div className='footer-Con'><a className="btn margin" href='https://github.com/Ibo66139/To-do-list-' target="_blank" rel="noopener noreferrer">Quellcode</a><a className="btn margin" href='https://mellifluous-youtiao-08cd7d.netlify.app' target="_blank" rel="noopener noreferrer">Zum Projekt</a></div></>,
      alt: 'Bild von Projekt 2',
      css: 'img'
  }

];

export default Portfolio;
