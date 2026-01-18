import React from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const About = ({ setCurrentIndex }) => {
  return (
    <div className='Abou-Con Display-Flex'>
      <div className='Abou-P'>
        <p>Schon früh hat mich die Welt der IT und der technischen Systeme fasziniert, insbesondere das Zusammenspiel von Hardware, Software und Netzwerken. Ohne klassische Ausbildung habe ich mir eigenständig praktische IT Kenntnisse angeeignet und möchte diese nun im Rahmen einer praxisorientierten Ausbildung weiter vertiefen.</p>
        <p>In den vergangenen Jahren habe ich mir sowohl Kenntnisse in der Programmierung als auch im Umgang mit Hardware, Betriebssystemen und Servern angeeignet. Dabei war mir stets wichtig, nicht nur Lösungen umzusetzen, sondern auch zu verstehen, wie Systeme im Hintergrund funktionieren und miteinander interagieren.</p>
        <p>Praktische Erfahrungen konnte ich bereits im Rahmen eines Praktikums im IT Bereich bei Beton Kemmler sammeln. Dort war ich unter anderem an der Wartung und dem Austausch von Arbeitsplatzrechnern beteiligt, führte Client Rollouts durch und installierte Windows 11 über den firmeneigenen Server. Zudem richtete ich Arbeitsplätze ein, installierte benötigte Anwendungen und unterstützte bei der Analyse von Hard und Softwareproblemen. Diese Erfahrungen haben mein technisches Interesse weiter gestärkt und meinen Wunsch bestätigt, eine praxisnahe IT Ausbildung zu absolvieren.</p>
        <p>Durch eigene Projekte, praktische Arbeiten und selbstständiges Lernen habe ich gelernt, strukturiert vorzugehen, Fehler systematisch zu analysieren und technische Herausforderungen eigenverantwortlich zu lösen. Diese praxisnahe Herangehensweise möchte ich nun im Rahmen einer Ausbildung weiter vertiefen und professionalisieren.</p>
        <p>Die folgenden Projekte geben einen Einblick in meine bisherigen praktischen Erfahrungen, meine Arbeitsweise und mein technisches Interesse.</p>

        <a
          href="#projekts"
          onClick={(e) => {
            e.preventDefault();
            setCurrentIndex("projekts");
          }}
          className="btn"
        >
          meine Projekte
        </a>
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
          <a href="https://www.linkedin.com/in/ibrahim-kocak-786a7827b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="https://github.com/Ibo66139" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
