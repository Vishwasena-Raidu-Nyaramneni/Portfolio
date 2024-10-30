import React from 'react';
import '../styles/About.css'; // Import the CSS for styling
import { FaJava, FaReact, FaDatabase, FaAngular, FaDocker, FaGitAlt, FaJenkins } from 'react-icons/fa'; // Import the icons you want to use
import { SiSpring, SiSpringboot, SiPostgresql, SiMongodb, SiKubernetes } from 'react-icons/si'; // Additional icons

const workExperiences = [
  {
    title: "Full Stack Developer",
    company: "Fannie Mae",
    duration: "Jul 2023 - Present",
    responsibilities: [
      "Developing and maintaining full-stack applications using Java and Angular.",
      "Collaborating with cross-functional teams to deliver high-quality software.",
      "Implementing RESTful APIs and integrating with cloud services.",
      "Optimizing application performance and conducting code reviews.",
      "Participating in Agile development processes and sprint planning."
    ]
  },
  {
    title: "Java Developer",
    company: "Verizon",
    duration: "Nov 2020 - Aug 2022",
    responsibilities: [
      "Designed and implemented scalable Java applications.",
      "Worked on microservices architecture and cloud integration.",
      "Wrote unit tests and performed code reviews to ensure quality.",
      "Collaborated with stakeholders to gather requirements.",
      "Contributed to system architecture and design discussions."
    ]
  },
  {
    title: "Java Developer Intern",
    company: "KLM Systems Pvt Ltd",
    duration: "Sept 2019 - Oct 2020",
    responsibilities: [
      "Assisted in the development of Java applications under supervision.",
      "Participated in code reviews and debugging sessions.",
      "Learned about Agile methodologies and software development lifecycle.",
      "Gained experience in database management and RESTful services.",
      "Collaborated with senior developers to enhance coding skills."
    ]
  }
];

const skills = [
  { name: "Java", icon: <FaJava /> },
  { name: "Spring", icon: <SiSpring /> },
  { name: "Spring Boot", icon: <SiSpringboot /> },
  { name: "JPA", icon: <FaDatabase /> }, // Using the database icon for JPA
  { name: "Hibernate", icon: <FaDatabase /> }, // Using the database icon for Hibernate
  { name: "MySQL", icon: <FaDatabase /> },
  { name: "MSSQL", icon: <FaDatabase /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "OracleDB", icon: <FaDatabase /> },
  { name: "Jenkins", icon: <FaJenkins /> },
  { name: "Docker", icon: <FaDocker /> },
  { name: "Kubernetes", icon: <SiKubernetes /> },
  { name: "HTML", icon: <FaReact /> }, // React icon can represent HTML
  { name: "CSS", icon: <FaReact /> },  // React icon can represent CSS
  { name: "JavaScript", icon: <FaReact /> }, // React icon can represent JavaScript
  { name: "Angular", icon: <FaAngular /> },
  { name: "React", icon: <FaReact /> },
  { name: "Git", icon: <FaGitAlt /> },
  { name: "DockerHub", icon: <FaDocker /> },
  // Add any other relevant skills here
];

function About() {
  return (
    <div className="about">
      <h1 className="about-title">About Me</h1>
      <p className="summary">
        Having 4+ years of professional experience in solving real-world technical problems by developing, supporting, and improving performance of web-based, distributed, cloud, and client/server applications using Java/J2EE (mainly Spring, AWS) technologies. Currently looking for an opportunity to contribute my services.
      </p>

      <h2 className="section-title">Work Experience</h2>
      <div className="work-experience">
        {workExperiences.map((experience, index) => (
          <div className={`experience-block ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            <h3 className="job-title">{experience.title}</h3>
            <h4 className="company">{experience.company}</h4>
            <p className="duration">{experience.duration}</p>
            <ul className="responsibilities">
              {experience.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="section-title">Skills</h2>
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="skill-block" key={index}>
            <div className="icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
