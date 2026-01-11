import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaCode,
  FaPhp,
  FaReact,
  FaDocker,
  FaMapMarkerAlt,
  FaEnvelope,
  FaNode,
} from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import "./Accueil.scss";
import ContributionGithub from "../contributionGithub/ContributionGithub";
import { FunProjet } from "../projet/FunProjet";
import { EnterpriseExperience } from "../experience/EnterpriseExperience";
import { Footer } from "../footer/Footer";
import Contact from "../Contact";
import Projets from "../Projets/Projets";

interface Stack {
  icon: JSX.Element;
  name: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Accueil = () => {
  const stacks = [
    { icon: <FaCode />, name: "Typescript" },
    { icon: <FaReact />, name: "ReactJS" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNode />, name: "NodeJS" },
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaDocker />, name: "Docker" },
  ];

  return (
    <div className="home ">
      <Container>
        <Row className="mt-2 ">
          <Col xs={12} sm={12} md={12} lg={3} className="profil">
            <ProfileSection />
          </Col>

          <Col
            md={8}
            className="about my-3 col-xs-12 col-sm-12 col-md-12 col-lg-9"
          >
            <AboutSection stacks={stacks} />

            <h6>Companies</h6>
            <aside className="mb-4">
              <ContributionGithub />
            </aside>

            <div className="">
              <h6>Professional Experience</h6>
              <aside className="mb-2">
                <EnterpriseExperience />
              </aside>
            </div>

            <h6>Fun Projects</h6>
            <aside className="mb-4 px-4">
              <FunProjet />
            </aside>
            <aside className="mb-4 px-4">
              <Footer />
            </aside>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const ProfileSection = () => (
  <Row>
    <Col xs={12} sm={12} md={12} className="mt-5 my-lg-0">
      <ProfileInfo />
    </Col>
    <Row>
      <Col
        xs={12}
        sm={12}
        className="mt-md-5 my-lg-0 text-center text-lg-start"
      >
        <UsefulLinks />
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={12} className="text-center text-lg-start langues">
        <Languages />
      </Col>
    </Row>
  </Row>
);

const ProfileInfo: React.FC = () => {
  return (
    <div className="row col-lg-12">
      <div className="avatar-container col-md-4 col-lg-12">
        <img
          className="round-avatar"
          role="img"
          aria-label="Avatar de Jedeon Sap"
        />
      </div>
      <div className="col-md-8 col-lg-12 d-flex flex-column align-items-center gap-2 justify-content-xl-start">
        <div className="profile-header my-3 mx-md-4 mx-lg-0 col-md-8 col-lg-12 text-center">
          <h5 className="name-title mb-2">Jedeon Sap</h5>
          <Contact />
        </div>
        <aside className="mx-md-4 mx-lg-0 col-lg-12 text-lg-start align-items-lg-start">
          <Card.Subtitle className="py-2 col-md-12 col-lg-12 competence">
            Full Stack Developer
          </Card.Subtitle>
          <div className="d-flex flex-column align-items-start my-3 gap-2">
            <h6 className="justify-content-xl-start opacity-75">
              <FaMapMarkerAlt className="me-2" />
              Ville-Marie, Montreal, QC
            </h6>
            <h6 className="justify-content-xl-start opacity-75">
              <FaEnvelope className="me-2" />
              jedeon.lontchi@gmail.com
            </h6>
          </div>
        </aside>
      </div>
    </div>
  );
};

const UsefulLinks = () => (
  <aside className="my-4 my-lg-0 link">
    <h5 className="mb-3">Liens utiles</h5>
    <div className="d-flex justify-content-center justify-content-lg-start gap-3 opacity-75 z-1">
      <Button
        variant="link"
        href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183"
        className="d-flex align-items-center text-reset link-hover"
      >
        <FaLinkedin className="me-2" />
      </Button>
      <Button
        variant="link"
        href="https://github.com/Sdev237"
        className="d-flex align-items-center text-reset link-hover"
      >
        <FaGithub className="me-2" />
      </Button>
      <a
        href="/Jedeon_Sap_Lontchi_CV.pdf"
        download="Jedeon_Sap_Lontchi_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 d-flex align-items-center text-reset link-hover z-3 text-decoration-none"
      >
        <FaFileAlt className="me-2" />
        <span>Get my CV</span>
      </a>
    </div>
  </aside>
);

const Languages = () => (

);

const AboutSection = ({ stacks }: { stacks: Stack[] }) => (
  <>
    <h5 className="mx-2 text-center text-lg-start d-none d-lg-block">
      About Me
    </h5>
    <Col className="bio px-3 py-4">
      <h2 className="text-center text-lg-start">👋 Hello, I'm Jedeon Sap</h2>
      <h2 className="about-title">
        <em>Full Stack Developer & QA Tester and Cybersecurity Analyst</em>
      </h2>
      <p className="about-highlight">
      I design robust and secure {" "}
        <a
          className="about-badge"
          href="https://github.com/Sdev237"
          target="_blank"
          rel="noopener noreferrer"
          title="Voir mes applications web"
        >
          <svg
            width="16"
            height="16"
            style={{ marginRight: 4, verticalAlign: "middle" }}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.719 3.093a.75.75 0 0 1 .188 1.043L3.13 8l2.777 3.864a.75.75 0 1 1-1.23.854l-3-4.167a.75.75 0 0 1 0-.854l3-4.167a.75.75 0 0 1 1.043-.188zm4.562 0a.75.75 0 0 1 1.043.188l3 4.167a.75.75 0 0 1 0 .854l-3 4.167a.75.75 0 1 1-1.23-.854L12.87 8 10.093 4.136a.75.75 0 0 1 .188-1.043z" />
          </svg>
          web applications
        </a>
        , and I analyze
        <a
          className="about-badge"
          href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183"
          target="_blank"
          rel="noopener noreferrer"
          title="Voir mon expertise cybersécurité"
        >
          <svg
            width="16"
            height="16"
            style={{ marginRight: 4, verticalAlign: "middle" }}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0Zm0 15A7 7 0 1 1 15 8 7 7 0 0 1 8 15Zm0-13a6 6 0 1 0 6 6A6 6 0 0 0 8 2Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm0-9a4 4 0 1 0 4 4A4 4 0 0 0 8 4Zm0 7a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
          </svg>
          cyber risks
        </a>
         to ensure project reliability.
        <br />
         I also share my knowledge on{" "}
        <a
          className="about-badge"
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <svg
            width="16"
            height="16"
            style={{ marginRight: 4, verticalAlign: "middle" }}
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.009-.422A6.673 6.673 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518A3.301 3.301 0 0 0 15.555 2.4a6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.766-3.429A3.289 3.289 0 0 0 2.23 7.13a3.323 3.323 0 0 1-1.487-.41v.041a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115c-.211 0-.417-.021-.616-.061a3.293 3.293 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
          </svg>
          Twitter
        </a>
        and
        <a
          className="about-badge"
          href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#fff" role="img">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.327-.025-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.899 1.637-1.848 3.368-1.848 3.6 0 4.267 2.37 4.267 5.455v6.284zM5.337 7.433c-1.144 0-2.07-.927-2.07-2.07 0-1.144.926-2.07 2.07-2.07 1.143 0 2.07.926 2.07 2.07 0 1.143-.927 2.07-2.07 2.07zM6.861 20.452H3.813V9h3.048v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0z"/>
          </svg>

          LinkedIn
        </a>
      </p>
      <div style={{ marginTop: "2.2rem", marginBottom: "10px" }}>
        <h6 className="mt-3 fw-bold">Projets</h6>
        <p className="projects-desc" >
          I create applications and tools to be profitable and help people with
          my skills.
        </p>
        <div style={{ marginTop: "-3rem" }}>
          <Projets />
        </div>
      </div>
      <h6 className="mt-3">Stacks</h6>
      <Row>
        <Col
          className="stack py-4"
          style={{
            border: "1px solid #333",
            borderRadius: "0.4rem",
            marginLeft: "1rem",
          }}
        >
          <div className="d-flex flex-wrap justify-content-center ml-4">
            {stacks.map(({ icon, name }) => (
              <Button
                key={name}
                variant="outline-secondary"
                className="m-2 stackBtn"
              >
                {React.cloneElement(icon, { className: "me-2" })} {name}
              </Button>
            ))}
          </div>
        </Col>
      </Row>
    </Col>
  </>
);

export default Accueil;
