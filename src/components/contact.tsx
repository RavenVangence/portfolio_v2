import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { SiUpwork } from 'react-icons/si';

function Contact() {
    return (
        <section className="contact-container">
            <div className="container">
                <nav className='contact-nav-container'>
                    <ul>
                        <li><h1>Contact</h1></li>
                    </ul>
                </nav>
                <div className='contact-content'>
                    <div className='contact-intro'>
                        <h1>Let's Work Together</h1>
                        <p>Reach me below.</p>
                    </div>
                    <div className="contact-layout">
                        <a href="https://github.com/RavenVangence" target='blank'><FaGithub className='contact-icon github-icon' id='github-icon' /><p>Github</p></a>
                        <a href="https://www.linkedin.com/in/ndivhuwo-theraven/" target='blank'><FaLinkedinIn className='contact-icon linkedin-icon' /> <p>LinkedIn</p></a>
                        <a href="https://www.upwork.com/freelancers/~018dffb6a78e567e9b" target='blank'><SiUpwork className='contact-icon upwork-icon' /> <p>Upwork</p></a>
                        <a href="mailto:ravenmunonela@gmail.com"><MdAlternateEmail className='contact-icon email-icon' /> <p>Send an Email</p></a>
                    </div>
                </div>

                <div className="second-sideband"></div>
            </div>
        </section>
    )
}

export default Contact;