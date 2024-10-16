import React from 'react';
import { useMediaQuery } from 'react-responsive';
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { FaLinkedin, FaGithub, FaFileAlt, FaCode, FaPhp, FaLaravel, FaReact, FaDocker, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import './Accueil.scss';
import ContributionGithub from './ContributionGithub';
import { SiNextdotjs } from 'react-icons/si';

const Accueil = () => {

  return (  
    <div className="home" >
      <Container>
        <Row className="mt-2 ">
          <Col md={3} className=' profil' style={{}}>
            <aside>
              <Image alt="s" className="round-avatar w-100 mb-3" />
              <h5 className='my-3 m-1'>Jedeon Sap<a className='btn contactMe' >Contact Me </a></h5>
              <Card.Subtitle className="my-4 py-2 competence">Développeur Full Stack</Card.Subtitle>
              <h6 className=" "><FaMapMarkerAlt className="me-2" />Ville-Marie, Montréal, QC</h6>
              <h6 className=" mb-2"><FaEnvelope className="me-2" />jedeon@example.com</h6>
            </aside>
            <aside className='my-4'>
              <h5 className='mb-3'>Liens utiles</h5>
              <div className='d-flex justify-content-between'>
                <Button variant="link" href="https://www.linkedin.com/in/jedeon-sap-lontchi-10744b183" className="d-flex align-items-center text-reset">   
                  <FaLinkedin className="me-2" />
                </Button>
                <Button variant="link" href="https://github.com/Sdev237" className="d-flex align-items-center text-reset">
                  <FaGithub className="me-2" />
                </Button>
                <a  className="d-flex align-items-center text-reset" href="./Jedeon_Sap_Lontchi_CV.pdf" download="./Jedeon_Sap_Lontchi_CV.pdf" >
                  <FaFileAlt className="me-2"/>
                  <span>Get my CV</span>
                </a>
              </div>
            </aside>   
            <hr/>
            <aside>
              <h4 className='mb-3'>Langues</h4>
              <h6>Français ( Langue Maternel )</h6>
              <h6>Anglais ( Deuxieme Langue )</h6>
            </aside>
          </Col>   

          <Col md={8} className='about my-3'>
            <h6 className='mx-2'>Apropos de moi</h6>
            <Col  className='bio px-3 py-4'>             
              <h2 className='mb-4 text-center' style={{opacity: '1'}}>Hi👋 HOW'S IT GOING</h2>
              <h4 className=''> Bienvenue Sur Mon Portfolio</h4>
              <p className='pb-' style={{opacity: '1'}}>
              Passionné du développement logiciel et des nouvelles technologies, j’ai la chance d'avoir pu développer mes compétences au sein de nombreuses entreprise a l’exemple de Orange Cameroun, HUGO Company LTD, CENADI et MODRY Sarl
              </p>

              <h3>STACK</h3>
              <Row className="mt-3">
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
            
            <h6 className='mx-2'>Contributions</h6>
            <aside className='p-3 mb-4' style={{border: '1px solid #333', borderRadius: '0.4rem'}}>
                <ContributionGithub />
            </aside>
          </Col> 
        </Row>
        <Row>
          <Col md={9}>

          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default Accueil;
