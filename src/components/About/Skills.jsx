import React, { useState } from "react";
import "./Skills.css";

function Skills() {
    const [activeSection, setActiveSection] = useState("technical");

    return (
        <div className="skills">
            <h3>Skills</h3>
            <div class="skills-container">
                {/* Mini-navbar */}
                <div className="skills-nav">
                    <button
                        className={`skills-nav-item ${activeSection === "technical" ? "active" : ""}`}
                        onClick={() => setActiveSection("technical")}
                    >
                        Technical
                    </button>
                    <button
                        className={`skills-nav-item ${activeSection === "soft" ? "active" : ""}`}
                        onClick={() => setActiveSection("soft")}
                    >
                        Soft
                    </button>
                    <button
                        className={`skills-nav-item ${activeSection === "communication" ? "active" : ""}`}
                        onClick={() => setActiveSection("languages")}
                    >
                        Languages
                    </button>
                </div>

                {/* Skill Sections */}
                <div className={`skills-content ${activeSection === "technical" ? "active" : ""}`}>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>p5.js</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>C#</li>
                        <li>Git</li>
                    </ul>
                </div>

                <div className={`skills-content ${activeSection === "soft" ? "active" : ""}`}>
                    <ul>
                        <li>Problem-solving</li>
                        <li>Critical Thinking</li>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                    </ul>
                </div>

                <div className={`skills-content ${activeSection === "languages" ? "active" : ""}`}>
                    <ul>
                        <li>Romanian (Native)</li>
                        <li>English (Fluent)</li>
                        <li>German (Beginner)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Skills;
