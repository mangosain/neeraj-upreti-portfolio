import React from "react";
import styles from "./Experience.module.css";

function Experience() {
    const experiences = [
        {
            companyLogo: "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/simpana.29df043cb3d1404ca0a0.png",
            role: "React Developer",
            duration: "Aug 2020 - May 2022",
        },
        {
            companyLogo: "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/vendify.90d7e8652cac810bca08.png",
            role: "Senior Software Engineer",
            duration: "May 2022 - March 2023",
        },
        {
            companyLogo: "https://mohd-shahid-iqbal.github.io/myportfolio/static/media/paceTrader.fb4d1afab3c59033ee4c.png",
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
