import React from "react";
import "./Projects.css";

import forest1 from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/Background/forestBackground/1.png';
import forest2 from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/Background/forestBackground/2.png';
import forest3 from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/Background/forestBackground/3.png';

function Projects() {
    const projects = [
        {
            title: "Project 1",
            description: "A brief description of Project 1.",
            link: "#",
        },
        {
            title: "Project 2",
            description: "A brief description of Project 2.",
            link: "#",
        },
        {
            title: "Project 3",
            description: "A brief description of Project 3.",
            link: "#",
        },
        {
            title: "Project 4",
            description: "A brief description of Project 4.",
            link: "#",
        },
        {
            title: "Project 5",
            description: "A brief description of Project 5.",
            link: "#",
        },
        {
            title: "Project 6",
            description: "A brief description of Project 6.",
            link: "#",
        },
    ];

    return (
        <section className="projects-section">
            <img src={forest3} class="forest1"></img>
            <img src={forest2} class="forest2"></img>
            <img src={forest1} class="forest3"></img>
            <div className="projects-grid-wrapper">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="pixel-corners--wrapper">
                            <div key={index} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    View Project
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;
