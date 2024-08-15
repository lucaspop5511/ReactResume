import React from 'react';
import './HeroSection.css';

import sky from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/Background/sky.png';
import mountain from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/Background/mountains.png';
import clouds from '/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/Background/clouds.png';

function HeroSection() {
    return (
        <header>
            <img src={sky} class="sky"></img>
            <img src={mountain} class="mountain"></img>
            <img src={clouds} class="clouds"></img>
            <div className="hero">
                <h1 className="title">Pop Lucas</h1>
                <h4 class="subtitle">FSEGA Student</h4>
            </div>
        </header>
    );
}

export default HeroSection;
