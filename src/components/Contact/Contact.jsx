import React from "react";
import "./Contact.css"; // For styling

function Contact() {
    return (
        <section className="contact-section pixel-corner">
            <h2>Contact</h2>
            <p>If you'd like to get in touch, feel free to Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit modi cum nam laudantium ab voluptatem, labore fugiat ratione corporis sit molestias nostrum! Nostrum, velit vel facere, natus iure delectus veritatis, ut repellendus vitae assumenda illo totam ducimus iusto sed repudiandae quibusdam distinctio exercitationem! Impedit tempora nam maxime aut deleniti hic..</p>
            <ul>
                <li>Email: <a href="mailto:lucas.pop@example.com">lucas.pop@example.com</a></li>
                <li>LinkedIn: <a href="https://www.linkedin.com/in/lucas-pop" target="_blank" rel="noopener noreferrer">linkedin.com/in/lucas-pop</a></li>
            </ul>
        </section>
    );
}

export default Contact;
