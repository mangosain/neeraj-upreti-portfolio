import React from "react";
import styles from "./About.module.css"; // Import the CSS module properly
import Image from "next/image";

function About() {
  return (
    <section className={styles.aboutContainer}>
      {/* Local Profile Image */}
      <Image
        src="/assets/profileImg.png" // Reference image from the public folder
        alt="Neeraj Upreti - Profile Picture"
        width={500}
        height={500}
        className={styles.ImageOfMohamad}
      />

      <div className={styles.aboutText}>
        <h2>About Me</h2>
        <p>
          My name is <strong>Neeraj Upreti</strong>. I&apos;m a post-graduate
          from Jamia Hamdard University in New Delhi, where I earned a degree in
          Masters of Computer Application (MCA). I&apos;m most passionate about
          giving back to the community, and my goal is to pursue this passion
          within the field of software engineering. In my free time, I enjoy
          contributing to open-source projects.
        </p>

        {/* Resume Download Link */}
        <a href="/RESUME.docx" download="Neeraj_Upreti_Resume">
          <button className={styles.button}>Download Resume</button>
        </a>
      </div>
    </section>
  );
}

export default About;
