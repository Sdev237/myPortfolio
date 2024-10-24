import React from 'react';
import { useMediaQuery } from 'react-responsive';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaFileAlt, FaCode, FaPhp, FaLaravel, FaReact, FaDocker, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Accueil.scss';
import ContributionGithub from './ContributionGithub';
import { SiNextdotjs } from 'react-icons/si';
import { FunProjet } from './FunProjet';
import Test from './Test';

const Accueil = () => {

  return (  
    <div className="home" >
      <Container>
        <Row className="mt-2">
          <Col className='col-xs-12 col-sm-12 col-md-12 col-lg-3 profil ' style={{}}>
            <Row>
              <Col className='col-xs-12 col-sm-12 col-md-12 mt-5 my-lg-0 '>
                <div>
                  <div className='row col-lg-12'>
                      <div className="avatar-container col-md-4 col-lg-12">
                        <img 
                          className="round-avatar"
                          role="img"
                          aria-label="Avatar de Jedeon Sap"
                        />
                    </div>
                    <div className='col-md-8 col-lg-12 d-flex flex-column align-items-center gap-2 justify-content-xl-start '>
                      <h5 className='my-3 mx-md-4 mx-lg-0 col-md-8 col-lg-12 text-center'>Jedeon Sap<a className='btn contactMe mx-3'>Contact Me </a></h5>
                      <aside className='mx-md-4 mx-lg-0  col-lg-12 text-lg-start align-items-lg-start'>
                        <Card.Subtitle className=" py-2 col-md-12 col-lg-12 competence">Développeur Full Stack</Card.Subtitle>
                        <div className='d-flex flex-column align-items-start  my-3 gap-2'>
                          <h6 className=" justify-content-xl-start opacity-75 "><FaMapMarkerAlt className="me-2" />Ville-Marie, Montréal, QC</h6>
                          <h6 className=" justify-content-xl-start opacity-75"><FaEnvelope className="me-2" />jedeon@example.com</h6>
                        </div>
                      </aside>
                    </div>
                  </div>
                </div>
              </Col>
              <Row>
                <Col className='col-xs-12 col-sm-12 mt-md-5 my-lg-0 text-center text-lg-start '>
                  <aside className='my-4 my-lg-0 link'>
                    <h5 className='mb-3'>Liens utiles</h5>
                    <div className='d-flex justify-content-center justify-content-lg-start gap-3 opacity-75'>
                      <Button variant="link" href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183" className="d-flex align-items-center text-reset link-hover">   
                        <FaLinkedin className="me-2" />
                      </Button>
                      <Button variant="link" href="https://github.com/Sdev237" className=" d-flex align-items-center text-reset link-hover">
                        <FaGithub className="me-2" />
                      </Button>
                      <a 
                        href="/Jedeon_Sap_Lontchi_CV.pdf"
                        download="Jedeon_Sap_Lontchi_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 d-flex align-items-center text-reset link-hover"
                      >
                        <FaFileAlt className="me-2"/>
                        <span>Get my CV</span>
                      </a>
                    </div>
                  </aside> 
                </Col>
              </Row>
              <Row>
                <Col className='col-xs-12 col-sm-12 text-center text-lg-start langues'>      
                  <hr/>
                  <aside>
                    <h4 className='mb-3'>Langues</h4>
                    <div className='d-flex flex-column opacity-75'>
                      <h6>Français ( Langue Maternel )</h6>
                      <h6>Anglais ( Deuxieme Langue )</h6>
                    </div>
                  </aside>
                </Col>   
              </Row>
            </Row>
          </Col>   

          <Col md={8} className='about my-3 col-xs-12 col-sm-12 col-md-12 col-lg-9 '>
            <h6 className='mx-2 text-center text-lg-start'>Apropos de moi</h6>
            <Col  className='bio px-3 py-4'>             
              <h1 className='mb-4 text-center  text-lg-start' style={{opacity: '1'}}>Hi👋 HOW'S IT GOING</h1>
              <h2 className=' text-center  text-lg-start'> Bienvenue Sur Mon Portfolio</h2>
              <p className='text-center  text-lg-start' style={{opacity: '1'}}>
                Passionné du développement logiciel et des nouvelles technologies, j’ai la chance d'avoir pu développer mes compétences au sein de nombreuses entreprise a l’exemple de Orange Cameroun, HUGO Company LTD, CENADI et MODRY Sarl
              </p>

              <h6 className="mt-3">Stacks</h6>
              <Row >
                {['ReactJS', 'Next.js', 'TailwindCSS', 'Bootstrap', 'Laravel', 'Vitest'].map((competence) => (
                  <Col md={2} key={competence}>
                    {/* <img src={`chemin/vers/logo-${competence}.svg`} alt={competence} /> */}
                  </Col>
                ))}
                <Col md={12} sm={12} xs={12} className='stack px-3 py-4' style={{border: '1px solid #333', borderRadius: '0.4rem'}}>
                  <div className="d-flex flex-wrap justify-content-center">
                    <Button variant="outline-secondary" className="m-2 stackBtn">
                      <FaCode className="me-2" /> Typescript
                    </Button>
                    <Button variant="outline-secondary" className="m-2 stackBtn">
                      <FaReact className="me-2" /> ReactJS
                    </Button>
                    <Button variant="outline-secondary" className="m-2 stackBtn">
                      <SiNextdotjs className="me-2" /> Next.js
                    </Button>
                    <Button variant="outline-secondary" className="m-2 stackBtn">
                      <FaPhp className="me-2" /> PHP
                    </Button>
                    <Button variant="outline-secondary" className="m-2 stackBtn">
                      <FaLaravel className="me-2" /> Laravel
                    </Button>
                    <Button variant="outline-secondary" className="m-2 stackBtn">
                      <FaDocker className="me-2" /> Docker
                    </Button>
                  </div>
                </Col>
              </Row>
            </Col>
            
            <h6 className=''>Company Contributions</h6>
            <aside className='mb-4' >
              <ContributionGithub />
            </aside>
            
            <h6 className=''>Fun Projets</h6>
            <aside className='mb-4 px-4' >
              <FunProjet />
            </aside>

            
          </Col> 
        </Row>
      </Container>
      
    </div>
  );
};

export default Accueil;
