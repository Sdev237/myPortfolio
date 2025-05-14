import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projets.scss";

const projects = [
  {
    title: "shaka-player-lecteur",
    description:
      "Lecteur vidéo React/TypeScript avec Shaka Player, intégrant DASH/HLS, gestion des sous-titres, qualité adaptative et interface responsive",
    view: "https://sap-streaming.vercel.app/",
  },
  {
    title: "Code & Cash - Podcast",
    description: "Les développeurs aussi peuvent faire du cash.",
  },
  {
    title: "BulkCorrector",
    description: "Correct the grammar of your text in minutes.",
  },
  {
    title: "TaskFlow App",
    description:
      "A mobile app to manage your daily tasks efficiently and intuitively.",
  },
  {
    title: "E-commerce SecurePay",
    description: "Integration of a secure payment system for online shops.",
  },
  {
    title: "Portfolio Generator",
    description:
      "Generate a beautiful portfolio website in minutes with no code.",
  },
];

const Projets = () => {
  return (
    <div className="projects-section">
      <h6>Projects</h6>
      <p className="projects-desc">
        I create applications and tools to be profitable and help people with my
        skills.
      </p>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          700: { slidesPerView: 2 },
          1100: { slidesPerView: 3 },
        }}
        className="projects-cards"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.title}>
            <div className="project-card text-white-50">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">
                {project.description}
                {project.view && (
                  <a
                    href={project.view}
                    className="project-view-inline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    &nbsp;View Project <span className="project-arrow">→</span>
                  </a>
                )}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projets;
