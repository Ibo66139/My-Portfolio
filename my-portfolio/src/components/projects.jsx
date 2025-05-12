import React from 'react';
import { ProjectCard } from './Portfolio.jsx';


const Projects = ({ onOpenDetails }) => {
  const projects = [
    { title: "Quiz-App", description: "Entwickelt mit React", image: "quizze.png" },
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
          onClickDetails={() => onOpenDetails(index)} // <-- wichtig!
        />
      ))}
    </div>
  );
};




export default Projects
