import React, { useState } from "react";
import "./Skills.css";
import "/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/components/Pixel/PixelBorderSkills.css";

import technical from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/technical.png';
import soft from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/soft.png';
import languages from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/languages.png';

import htmlIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/html.png';
import cssIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/css.png';
import jsIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/js.png';
import reactIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/react.png';
import p5Icon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/p5.png';
import gitIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/git.png';
import cIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/c.png';
import cppIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/cpp.png';
import csharpIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/csharp.png';

import problemIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/problem.png';
import attentionIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/attention.png';
import patienceIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/patience.png';
import teamworkIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/teamwork.png';
import communicationIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/communication.png';
import timeIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/time.png';
import learning1Icon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/learn.png';
import creativityIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/creativity.png';

import romanianIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/romanian.png';
import englishIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/english.png';
import germanIcon from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/german.png';

function Skills() {
    const [activeSection, setActiveSection] = useState("technical");

    return (
        <div className="skills">
            <h3>Skills</h3>
            <div className="skills-container pixel-skills--wrapper">
                {/* Mini-navbar */}
                <div className="skills-nav">
                    <button
                        id="tech-button"
                        className={`skills-nav-item ${activeSection === "technical" ? "active" : ""}`}
                        onClick={() => setActiveSection("technical")}
                    >
                        <img src={technical} alt="Technical Skills Icon" className="icon" />
                        <p>Technical</p>
                    </button>
                    <button
                        id="soft-button"
                        className={`skills-nav-item ${activeSection === "soft" ? "active" : ""}`}
                        onClick={() => setActiveSection("soft")}
                    >
                        <img src={soft} alt="Softskills Icon" className="icon" />
                        <p>Softskills</p>
                    </button>
                    <button
                        id="lang-button"
                        className={`skills-nav-item ${activeSection === "languages" ? "active" : ""}`}
                        onClick={() => setActiveSection("languages")}
                    >
                        <img src={languages} alt="Languages Icon" className="icon" />
                        <p>Languages</p>
                    </button>
                </div>

                {/* Technical Skills List */}
                <div className={`skills-content ${activeSection === "technical" ? "active" : ""}`}>
                    <div className="skills-list" id="tech-skills">
                        <div className="skill-item">
                            <img src={htmlIcon} alt="HTML Icon" />
                            <p>HTML</p>
                        </div>
                        <div className="skill-item">
                            <img src={cssIcon} alt="CSS Icon" />
                            <p>CSS</p>
                        </div>
                        <div className="skill-item">
                            <img src={jsIcon} alt="JavaScript Icon" />
                            <p>JavaScript</p>
                        </div>
                        <div className="skill-item">
                            <img src={reactIcon} alt="React.js Icon" />
                            <p>React.js</p>
                        </div>
                        <div className="skill-item">
                            <img src={p5Icon} alt="p5.js Icon" />
                            <p>p5.js</p>
                        </div>
                        <div className="skill-item">
                            <img src={gitIcon} alt="Git Icon" />
                            <p>Git (Github)</p>
                        </div>
                        <div className="skill-item">
                            <img src={cIcon} alt="C Icon" />
                            <p>C</p>
                        </div>
                        <div className="skill-item">
                            <img src={cppIcon} alt="C++ Icon" />
                            <p>C++</p>
                        </div>
                        <div className="skill-item">
                            <img src={csharpIcon} alt="C# Icon" />
                            <p>C#</p>
                        </div>
                    </div>
                </div>

                {/* Soft Skills List */}
                <div className={`skills-content ${activeSection === "soft" ? "active" : ""}`}>
                    <div className="skills-list" id="soft-skills">
                        <div className="skill-item">
                            <img src={problemIcon} alt="Problem-solving Icon" />
                            <p>Problem-solving</p>
                        </div>
                        <div className="skill-item">
                            <img src={attentionIcon} alt="Attention to Detail Icon" />
                            <p>Attention to Detail</p>
                        </div>
                        <div className="skill-item">
                            <img src={patienceIcon} alt="Patience Icon" />
                            <p>Patience</p>
                        </div>
                        <div className="skill-item">
                            <img src={teamworkIcon} alt="Teamwork Icon" />
                            <p>Teamwork</p>
                        </div>
                        <div className="skill-item">
                            <img src={communicationIcon} alt="Good Communication Icon" />
                            <p>Good Communication</p>
                        </div>
                        <div className="skill-item">
                            <img src={timeIcon} alt="Time Management Icon" />
                            <p>Time Management</p>
                        </div>
                        <div className="skill-item">
                            <img src={learning1Icon} alt="Continuous Learning Icon" id="learn" />
                            <p>Continuous Learning</p>
                        </div>
                        <div className="skill-item">
                            <img src={creativityIcon} alt="Creativity Icon" />
                            <p>Creativity</p>
                        </div>
                    </div>
                </div>

                {/* Languages List */}
                <div className={`skills-content ${activeSection === "languages" ? "active" : ""}`}>
                    <div className="skills-list" id="language">
                        <div className="skill-item">
                            <img src={romanianIcon} alt="Romanian Icon" />
                            <p>Romanian (Native)</p>
                        </div>
                        <div className="skill-item">
                            <img src={englishIcon} alt="English Icon" />
                            <p>English (Fluent)</p>
                        </div>
                        <div className="skill-item">
                            <img src={germanIcon} alt="German Icon" />
                            <p>German (Beginner)</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;