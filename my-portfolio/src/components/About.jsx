import React from 'react';
import { FaEnvelope,  } from 'react-icons/fa';
import { FaLinkedin, FaGithub, } from 'react-icons/fa';

const About = () => {
  return (


<div className='Abou-Con  Display-Flex'>

    <div className='Abou-P'>
        <p>Schon früh hat mich die Welt der Softwareentwicklung fasziniert  besonders der kreative Aspekt, komplexe Probleme mit strukturiertem Code zu lösen. Ohne klassische Ausbildung habe ich mir eigenständig fundierte Kenntnisse in der Programmierung angeeignet. Jetzt bin ich bereit für den nächsten Schritt, eine Ausbildung zum Fachinformatiker für Anwendungsentwicklung.</p>
        <p>In den letzten Jahren habe ich intensiv mit JavaScript, HTML und CSS gearbeitet und mehrere kleinere Projekte auf meinem GitHub-Profil veröffentlicht. Aktuell beschäftige ich mich mit React, um mein Verständnis moderner Frontend-Technologien weiter auszubauen. Dabei liegt mein Fokus nicht bloß auf Webseiten, sondern auf echter Programmierlogik, sauberem Code und der Entwicklung robuster, skalierbarer Anwendungen.</p>
        <p>Zusätzlich beschäftige ich mich nebenbei mit IT-Grundlagen und Sicherheitsaspekten, über die Plattform TryHackMe, um mein technisches Gesamtverständnis zu stärken  auch im Hinblick auf sicheres Programmieren.</p>
    </div>
    <div className="about-section">
      <h2>Kontakt Aufnehmen</h2>
      <div className="contact-item">
        <FaEnvelope className="icon" />
        <div>
          <strong>Email</strong>
          <p>ibo66kocak@gmail.com</p>
        </div>
      </div>
      


      

      <h3>Andere Profile</h3>
      <div className="social-icons">
        <a href="https://www.linkedin.com/in/ibrahim-kocak-786a7827b/" target="_blank" rel="noopener noreferrer"> <FaLinkedin  /></a>
       
       <a href="https://github.com/Ibo66139" target="_blank" rel="noopener noreferrer"><FaGithub /></a>

       <a href="https://tryhackme.com/p/ibo66kocak" target="_blank" rel="noopener noreferrer"><img src="tryhackme.png" alt="tryhackme"  className="logo-TryToHackMe"/></a>


        
        
        
       
      </div>
    </div>
</div>
  );
};

export default About;
