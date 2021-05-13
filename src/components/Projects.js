
import React from 'react';
import Project from "./Project";


function Projects() {
    return (
    <div>
        <Project 
        imgURL="./img/cryptelligent.png"
        projectTitle="Project #1"
        projectSubTitle="Cryptelligent"
        projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        deployedAppURL="https://eroux13.github.io/Cryptelligent/"
        githubURL="https://github.com/eroux13/Cryptelligent"
        ></Project>

        <Project 
        imgURL="./assets/gymproject.png"
        projectTitle="Project #2"
        projectSubTitle="MyGym"
        projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        deployedAppURL="https://github.com/eroux13/gym_management_database"
        githubURL="https://intense-springs-12278.herokuapp.com/"
        ></Project>

<Project 
        imgURL="#"
        projectTitle="Project #3"
        projectSubTitle="TBD"
        projectDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        deployedAppURL="https://github.com/maria-lara"
        githubURL="https://github.com/maria-lara"
        ></Project>
    </div>
    )

}

export default Projects;