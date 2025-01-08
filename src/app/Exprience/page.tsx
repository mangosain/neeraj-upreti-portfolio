import React from "react";
import styles from "./Experience.module.css";

function Experience() {
  const experiences = [
    {
      companyLogo: "/assets/simpana.png",
      role: "React Developer",
      duration: "Aug 2020 - May 2022",
    },
    {
      companyLogo: "/assets/endify.png",
      role: "Senior Software Engineer",
      duration: "May 2022 - March 2023",
    },
    {
      companyLogo: "/assets/pace.png",
      role: "React Developer",
      duration: "March 2023 - Present",
    },
  ];

  return (
    <div className={styles.experienceSection}>
      <h1 className={styles.heading}>Experiences</h1>
      <div className={styles.experiences}>
        {experiences.map((exp, index) => (
          <div className={styles.experienceCard} key={index}>
            <img
              src={exp.companyLogo}
              alt={`${exp.role} at company`}
              className={styles.logo}
            />
            <p className={styles.role}>{exp.role}</p>
            <p className={styles.duration}>{exp.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
