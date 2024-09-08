import React from "react";
import "./Contact.css";

import linkedin from "/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/contact/linkedin.png";
import github from "/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/contact/github.png";
import gmail from "/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/contact/gmail.png";
import whatsapp from "/Users/lucaspop51/Documents/vscode/ReactResume/react-resume/src/assets/PixelLogos/contact/whatsapp.png";


function Contact() {
    return (
        <section className="contact-section">
            <h2>Contact</h2>
            <p>I am currently open to work in a front-end position. </p>
            <p>If you would like to get in touch, please contact me via email or whatsapp. </p>
            <footer>
                <a href="https://www.linkedin.com/in/pop-lucas-135993249/" target="_blank"><img src={linkedin}></img></a>
                <a href="https://github.com/lucaspop5511" target="_blank"><img src={github}></img></a>
                <a href="https://wa.me/0750411219" target="_blank"><img src={whatsapp}></img></a>
                <a href="mailto:lucaspop5511@gmail.com" target="_blank"><img src={gmail}></img></a>
            </footer>
        </section>
    );
}

export default Contact;
