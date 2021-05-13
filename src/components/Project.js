import React from 'react';

function Project(props) {
    return(
    <div className="container">
        <div className="row border">
            <h1 className="font-weight-bold text-center m-3">{props.projectTitle}</h1>
            <h2 className="text-center">{props.projectSubTitle}</h2>
            <img class="project-image text-center" alt="" src={props.imgURL}></img> 
            <p className="text-center">{[props.projectDescription]}</p>
            <a target="_blank" rel="noreferrer" className="btn btn-primary m-1" href={props.deployedAppURL} >View Deployed Application</a>
            <a target="_blank" rel="noreferrer" class="btn btn-secondary text-center m-1" href={props.githubURL}> | View Github Repository</a>
        </div>
    </div>
    )

}

export default Project;