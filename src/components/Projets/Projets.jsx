import React from "react";
import "./Projets.scss";

const Projets = () => {
  const projects = [
    {
      title: "Apprendre à Technologies",
      description:
        "Deviens développeur web, décrocher un job en CDI ou créer des SaaS.",
    },
    {
      title: "Code & Cash - Podcast",
      description: "Les développeurs aussi peuvent faire du cash.",
    },
    {
      title: "BulkCorrector",
      description: "Correct the grammar of your text in minutes.",
    },
  ];

  return (
    <div className="projects-section">
      <h6>Projects</h6>
      <p className="projects-desc">
        I create applications and tools to be profitable and help people with my
        skills.
      </p>
      <div className="projects-cards">
        {projects.map((project, idx) => (
          <div
            className="project-card"
            key={project.title}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <h2 className="project-title">{project.title}</h2>
            <p className="project-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projets;
