import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "./projectList";
import './projectDisplay.scss';

function ProjectDisplay() {
    const { id } = useParams();
    const project = projectList[id]
    return (
        <div className="project">
            <h1> {project.name} </h1>

            <img src={project.image} alt="project"/>

            <p>
                Skills: {project.skills}
            </p>

            <p2>
                {project.description}
            </p2>

            <p3>
                Check it out&nbsp;
                    <a target='_blank' rel='noreferrer' href={project.url}>here</a>
            </p3>

        </div>
    );
}

export default ProjectDisplay;