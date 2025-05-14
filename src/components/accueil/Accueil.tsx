import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Form,
} from "react-bootstrap";
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
    { icon: <SiTailwindcss />, name: "TailwindCSS" },
    { icon: <FaPhp />, name: "PHP" },
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
  <>
    <hr />
    <aside>
      <h4 className="mb-3">Languages</h4>
      <div className="d-flex flex-column opacity-75">
        <h6>French (Native Language)</h6>
        <h6>English (Second Language)</h6>
      </div>
    </aside>
  </>
);

const AboutSection = ({ stacks }: { stacks: Stack[] }) => (
  <>
    <h6 className="mx-2 text-center text-lg-start d-none d-lg-block">
      About Me
    </h6>
    <Col className="bio px-3 py-4">
      <h1 className="mb-4 text-center text-lg-start" style={{ opacity: "1" }}>
        Hi THERE👋HOW'S IT GOING !!
      </h1>
      <h2 className="text-center text-lg-start">Welcome to My Portfolio!</h2>
      <h4 className="text-center text-lg-start opacity-95">
        Want to work together on fun projects?
      </h4>
      <p
        className="text-center text-lg-start opacity-75"
        style={{ opacity: "1" }}
      >
        I am passionate about web development and new technologies, I have been
        fortunate to develop my skills within many companies such as Orange
        Cameroon, HUGO Company LTD, CENADI and MODRY Sarl
      </p>
      <div className="">
        <h6 className="mt-3">Stacks</h6>
        <Projets />
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
