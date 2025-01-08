import React from 'react';
import './style.css'; // Import the global styles

interface ProjectCardProps {
  title: string;
  description: string;
  languages: { [key: string]: number } | null;
  updated: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, languages, updated }) => (
  <div className="projectCard">
    <h3 className="projectTitle">{title}</h3>
    {description && <p>{description}</p>}
    <div>
      <button className="button">Clone Project</button>
      <button className="button">Repo</button>
    </div>
    {languages ? (
      <div className="languages">
        {Object.entries(languages).map(([lang, percent], index) => (
          <span key={index}>
            {lang}: {percent} %
          </span>
        ))}
      </div>
    ) : (
      <p>Languages: code yet to be deployed.</p>
    )}
    <p className="updated">Updated on {updated}</p>
  </div>
);

const Home: React.FC = () => {
  const projects = [
    {
      title: 'myportfolio',
      description: '',
      languages: { JavaScript: 51.5, SCSS: 45.3, HTML: 3 },
      updated: 'January 17, 2024',
    },
    {
      title: 'create-react-app-lambda',
      description: 'Code yet to be deployed.',
      languages: null,
      updated: 'December 7, 2023',
    },
    {
      title: 'Task-Management',
      description:
        'It is a task management system where all users can track their tasks with the status of in-progress, pending, and completed.',
      languages: { JavaScript: 78.8, CSS: 19, HTML: 2.1 },
      updated: 'February 5, 2023',
    },
    {
      title: 'Mohd-shahid-iqbal',
      description: 'Config files for my GitHub profile.',
      languages: null,
      updated: 'October 27, 2021',
    },
  ];

  return (
    <div className="container">
      <main className="mainContent">
        <div className="leftContainer">
          <h2>Recent Projects</h2>
          <div className="projects">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
