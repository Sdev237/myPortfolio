import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Projets.scss";

const projects = [
  {
    title: "Sales & Inventory System",
    description: "A full-featured web app to manage sales and inventory with real-time stock updates and user management.",
    view: "https://github.com/Sdev237?tab=repositories",
  },  
  {
    title: "shaka-player-lecteur",
    description: "React video player using Shaka Player, supporting DASH/HLS with a responsive interface.",
    view: "https://sap-streaming.vercel.app/",
  },
  {
    title: "Ebulletin MINFI",
    description: "Official platform for Cameroonian civil servants to access and download their payslips online.",
    view: "https://ebulletin.minfi.cm/",
  },
  {
    title: "SaaS Express - Modern Landing Page",
    description: "A sleek and responsive template to quickly launch a professional SaaS landing page.",
    view: "https://landing-page-432f4.web.app/",
  },
  {
    title: "TaskFlow – Task Manager",
    description: "A minimalist web app to organize, prioritize, and track daily tasks with a clean and intuitive UI.",
    view: "https://todo-list-six-orcin.vercel.app/",
  },
  {
    title: "E-commerce SecurePay",
    description: "Integration of a secure payment system for online shops.",
  },
];


const Projets = () => {
  return (
    <div className="projects-section">
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
