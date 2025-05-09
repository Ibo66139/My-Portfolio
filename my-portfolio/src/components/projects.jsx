import React from 'react';
import { ProjectCard } from './Portfolio.jsx';




const Projects = ({ onOpenDetails }) => {



    return (

        <div className='projects-Con'>
            <ProjectCard  title="Quiz-App" description="Enwickelt mit React"  image="quizze.png" link="" onClickDetails={onOpenDetails} />
            <ProjectCard  title="My Portfolio" description="Enwickelt mit React" image="favicon.ico" link="" onClickDetails={onOpenDetails} />
            <ProjectCard  title="Calculator" description="Enwickelt mit Javascript" image="Calculator.png" link="" onClickDetails={onOpenDetails}/>
            <ProjectCard  title="Tic Tac Toe" description="Enwickelt mit Javascript" image="TicTacToe.png" link="" onClickDetails={onOpenDetails}/>
            <ProjectCard  title="To do list" description="Enwickelt mit Javascript"  image="Todolist.png" link="https://www.youtube.com/feed/history" onClickDetails={onOpenDetails}/>
        </div>
        

    )


}   




export default Projects
