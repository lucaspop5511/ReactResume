import React from "react";
import "./About.css";
import Skills from "./Skills";

import profilePic from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/aboutMePicture.png';

function About() {
    return (
        <section className="about-section">

            <div class="about-me">
                <h2>About Me</h2>
                <div class="about-me-content">
                    <p>
                        <i>Hi there!</i> <br />
                        I'm studying Informatics and Economics and have a real passion for <b>web design</b>.
                        I love working on both the tech and creative sides of building websites,
                        and also enjoy making things both functional and <b class='visually-appealing'>visually appealing.</b>
                    </p>
                    <img src={profilePic} class="profilePic"></img>
                </div>
            </div>

            <div class="skills">
                <Skills />

                <div className="extension pixel-corner"></div>
            </div>

        </section>
    );
}

export default About;