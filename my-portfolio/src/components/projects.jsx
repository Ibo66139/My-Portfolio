import React from 'react';
import { ProjectCard } from './Portfolio.jsx';


const Projects = ({ onOpenDetails }) => {
  const projects = [
    { title: "Quiz-App", description: "Entwickelt mit React", image: "quizze.png" },
    { title: "Zusammenbau mehrerer PCs", description: "Ich habe mehrere PCs eigenständig geplant und zusammengebaut.", image: "pc-img.jpeg" },
    { title: "Laptop Aufrüstung mit M.2 SSD", description: "Ich habe meinen Laptop durch den Einbau einer M.2 SSD aufgerüstet.", image: "Laptop.jpeg" },
    { title: "Snackautomaten", description: "Ich bin für Wartung und Reparatur meines eigenen Snackautomaten verantwortlich.", image: "Snack-img.jpeg" },
    { title: "Einrichtung und Betrieb von Minecraft und ARK Servern", description: "Ich habe eigene Minecraft und ARK Server eingerichtet und betrieben.", image: "database.png" },
    { title: "My Portfolio", description: "Entwickelt mit React", image: "favicon.ico" },
    { title: "Calculator", description: "Entwickelt mit Javascript", image: "Calculator.png" },
    { title: "Tic Tac Toe", description: "Entwickelt mit Javascript", image: "TicTacToe.png" },
    { title: "To do list", description: "Entwickelt mit Javascript", image: "Todolist.png" }
  ];

  return (
    <div className='projects-Con'>
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          title={project.title}
          description={project.description}
          image={project.image}
          onClickDetails={() => onOpenDetails(index)} 
        />
      ))}
    </div>
  );
};




export default Projects
