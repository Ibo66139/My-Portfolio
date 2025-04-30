import React from 'react';
import { ProjectCard } from './Portfolio .jsx';




const projects = () => {


    return (

        <div className='projects-Con'>
            <ProjectCard  title="Quiz-App" description="Enwickelt mit React"  image="quizze.png" link="https://www.youtube.com/feed/history" linkDescription="Mehr erfahren"/>
            <ProjectCard  title="My Portfolio" description="Enwickelt mit React" image="portfolio.png" link="" linkDescription="Mehr erfahren" />
            <ProjectCard  title="Website" description="Enwickelt mit Javascript" image="Webseite.png" link="" linkDescription="Mehr erfahren"/>
            <ProjectCard  title="Calculator" description="Enwickelt mit Javascript" image="Calculator.png" link="" linkDescription="Mehr erfahren"/>
            <ProjectCard  title="Tic Tac Toe" description="Enwickelt mit Javascript" image="TicTacToe.png" link="" linkDescription="Mehr erfahren"/>
            <ProjectCard  title="To do list" description="Enwickelt mit Javascript"  image="Todolist.png" link="https://www.youtube.com/feed/history" linkDescription="Mehr erfahren"/>
        </div>
        

    )


}   




export default projects
