import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      name: 'Resume Reviewer',
      description:
        'The Resume Reviewer project is designed to automate the process of analyzing and providing feedback on resumes. The application uses natural language processing (NLP) and machine learning techniques to assess the content, structure, and keywords within resumes, helping job seekers to get interviews.',
      skills: ['Java', 'Spring Boot', 'Machine Learning', 'SQL', 'Azure', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'Chat Application using WebSocket',
      description:
        'Created a group chat application using Spring Boot and WebSocket, allowing users to participate in real-time group conversations. The application features user authentication and message history, providing an interactive platform for seamless communication among multiple users in dedicated chat rooms.',
      skills: ['HTML', 'CSS', 'PHP', 'MYSQL', 'Java', 'REST API'],
    },
  ];

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            {project.skills.length > 0 && (
              <p>
                <strong>Skills:</strong> {project.skills.join(', ')}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
