import React from 'react';
import styles from './About.module.css'; // Import the CSS module properly

function About() {
    return (
        <>
            <div className={styles.aboutContainer}>
                <img 
                    className={styles.ImageOfMohamad} 
                    src="https://mohd-shahid-iqbal.github.io/myportfolio/static/media/shahid.c9f7e04d7825dd13872b.png" 
                    alt="Neeraj Upreti - Profile Picture" 
                />

                <div>
                    <p>About Me</p>
                    <p>
                        My name is <strong>Neeraj Upreti</strong>. I’m a post-graduate of 2020 from Jamia Hamdard University in New Delhi with a degree in Masters of Computer Application. 
                        I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. 
                        In my free time, I like working on open-source projects.
                    </p>

                    <a href="RESUME.docx" download="RESUME.docx">
                        <button className={styles.button}>Download Resume</button>
                    </a>
                </div>
            </div>
        </>
    );
}

export default About;
