'use client'
import styles from './Skills.module.css';

import { useState } from "react";

export default function Skills() {
    const [activeTab, setActiveTab] = useState("technical");

    return (
        <div className={styles.skillsSection}>
            <h2>Skills</h2>
            <div className={styles.tabContainer}>
                <button
                    className={`${styles.tabButton} ${activeTab === "technical" ? styles.activeTab : ""
                        }`}
                    onClick={() => setActiveTab("technical")}
                >
                    Technical Skills
                </button>
                <button
                    className={`${styles.tabButton} ${activeTab === "soft" ? styles.activeTab : ""
                        }`}
                    onClick={() => setActiveTab("soft")}
                >
                    Soft Skills
                </button>
            </div>
            <div className={styles.skillsContainer}>
                {activeTab === "technical" ? (
                    <div className={styles.column}>
                        <Skill name="React" level={90} />
                        <Skill name="JavaScript" level={85} />
                        <Skill name="Data Structures" level={80} />
                    </div>
                ) : (
                    <div className={styles.column}>
                        <Skill name="Problem Solving" level={90} />
                        <Skill name="Creativity" level={85} />
                        <Skill name="Adaptability" level={80} />
                    </div>
                )}
            </div>

        </div>
    );
}

interface SkillProps {
    name: string; // 'name' must be a string
    level: number; // 'level' must be a number
}

function Skill({ name, level }: SkillProps) {
    return (
        <div className={styles.skill}>
            <p>{name}</p>
            <div className={styles.progressBar}>
                <div
                    className={styles.progress}
                    style={{ width: `${level}%` }}
                ></div>
            </div>
        </div>
    );
}



