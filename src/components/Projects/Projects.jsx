import React from "react";
import "./Projects.css";

import forest1 from '/assets/Background/forestBackground/1.png';
import forest2 from '/assets/Background/forestBackground/2.png';
import forest3 from '/assets/Background/forestBackground/3.png';

function Projects() {
    const projects = [
        {
            title: "Honey Tunes",
            description: "Ear training test",
            link: "https://honey-tunes.vercel.app/",
        },
        {
            title: "Personal Website",
            description: "The first web app I built",
            link: "https://lucaspop51.vercel.app/",
        },
        {
            title: "Responsive Digital Clock",
            description: "Simple digital clock with a sleek design",
            link: "https://responsive-digital-clock.vercel.app/",
        },
        {
            title: "Resume Generator",
            description: "A one-page webapp that generates a random styled resume at the click of a button",
            link: "https://random-resume-generator.vercel.app/",
        },
        {
            title: "Task Manager",
            description: "Create, Edit and Delete tasks",
            link: "https://task-manager-ggvdmld9e-lucas-projects-4aae6ebb.vercel.app/",
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
                    {projects.map((project, index) =>
                    (
                        <div className="pixel-corners--wrapper">
                            <div key={index} className="project-card">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <a href={project.link} target="_blank" rel="noopener noreferrer">
                                    <i>View Project</i>
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
