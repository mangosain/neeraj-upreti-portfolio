import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className={styles.footer}>

            <h1>Get In Touch</h1>
            <p className={styles.footerText}>
                I'm currently looking for full-time React Developer/Frontend Developer opportunities!
                If you know of any positions available, or if you have any questions,
                feel free to email me at <a href="upreti.neeraj98@gmail.com" className={styles.emailLink}>upreti.neeraj98@gmail.com</a>.
            </p>
            <div className={styles.footerBottom}>
                <p>
                    <span>&lt; /&gt;</span> with <span>❤️</span> by Neeraj upreti using Next.js
                </p>
            </div>
        </footer>
    );
}

export default Footer;
