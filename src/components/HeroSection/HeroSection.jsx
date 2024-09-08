import React from 'react';
import './HeroSection.css';

import sky from 'react-resume/public/assets/Background/sky.png';
import mountain from 'react-resume/public/assets/Background/mountains.png';
import clouds from 'react-resume/public/assets/Background/clouds.png';

import arrows from 'react-resume/public/assets/elements/scrollArrow.png';

function HeroSection() {
    return (
        <header>
            <img src={sky} class="sky"></img>
            <img src={mountain} class="mountain"></img>
            <img src={clouds} class="clouds"></img>
            <div className="hero">
                <h1 className="title"><b>Pop</b> Lucas</h1>
                <h4 class="subtitle">Student and Web Dev</h4>
            </div>
            <img className='scroll-arrow' src={arrows}></img>
        </header>
    );
}

export default HeroSection;
