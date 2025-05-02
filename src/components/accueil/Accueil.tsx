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

interface Stack {
  icon: JSX.Element;
  name: string;
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

const ProfileInfo = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "4cf07025-30c0-4fe1-8c8a-5008383abfb4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

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
        <h5 className="my-3 mx-md-4 mx-lg-0 col-md-8 col-lg-12 text-center">
          Jedeon Sap
          <a className="btn contactMe mx-3" onClick={handleShow}>
            Contact Me🤝
          </a>
        </h5>
        <aside className="mx-md-4 mx-lg-0 col-lg-12 text-lg-start align-items-lg-start">
          <Card.Subtitle className="py-2 col-md-12 col-lg-12 competence">
            Développeur Full Stack
          </Card.Subtitle>
          <div className="d-flex flex-column align-items-start my-3 gap-2">
            <h6 className="justify-content-xl-start opacity-75">
              <FaMapMarkerAlt className="me-2" />
              Ville-Marie, Montréal, QC
            </h6>
            <h6 className="justify-content-xl-start opacity-75">
              <FaEnvelope className="me-2" />
              jedeon.lontchi@gmail.com
            </h6>
          </div>
        </aside>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
        className="home "
      >
        <div style={{ border: "0.01em solid #333", borderRadius: "1%" }}>
          <Modal.Header
            closeButton
            style={{ backgroundColor: "#0d1117", color: "#fff" }}
          >
            <Modal.Title>Me Contacter</Modal.Title>
          </Modal.Header>
          <Form
            onSubmit={onSubmit}
            style={{ backgroundColor: "#0d1117", color: "#fff" }}
          >
            <Modal.Body>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput2"
              >
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Votre nom"
                  autoFocus
                  style={{ backgroundColor: "#0d1117", color: "#fff" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Addresse email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="nom@exemple.com"
                  style={{ backgroundColor: "#0d1117", color: "#fff" }}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={3}
                  placeholder="Entrer votre message"
                  style={{ backgroundColor: "#0d1117", color: "#fff" }}
                />
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" variant="primary">
                Envoyer
              </Button>
            </Modal.Footer>
          </Form>
        </div>
      </Modal>
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
      <h4 className="mb-3">Langues</h4>
      <div className="d-flex flex-column opacity-75">
        <h6>Français ( Langue Maternel )</h6>
        <h6>Anglais ( Deuxieme Langue )</h6>
      </div>
    </aside>
  </>
);

const AboutSection = ({ stacks }: { stacks: Stack[] }) => (
  <>
    <h6 className="mx-2 text-center text-lg-start d-none d-lg-block">
      Apropos de moi
    </h6>
    <Col className="bio px-3 py-4">
      <h1 className="mb-4 text-center text-lg-start" style={{ opacity: "1" }}>
        Hi THERE👋HOW'S IT GOING !!
      </h1>
      <h2 className="text-center text-lg-start">
        Bienvenue Sur Mon Portfolio !
      </h2>
      <h4 className="text-center text-lg-start opacity-95">
        Ça vous dit de travailler ensemble sur des projets amusants ?
      </h4>
      <p
        className="text-center text-lg-start opacity-75"
        style={{ opacity: "1" }}
      >
        Je suis passionné du développement web et des nouvelles technologies,
        j'ai la chance d'avoir pu développer mes compétences au sein de
        nombreuses entreprise a l'exemple de Orange Cameroun, HUGO Company LTD,
        CENADI et MODRY Sarl
      </p>
  
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
