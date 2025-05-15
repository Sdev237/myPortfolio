import React from "react";
import "./Footer.scss";
import { Container } from "react-bootstrap";

export const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <Container>
      <footer className="footer">
        <div className="footer-content flex-column row">
          <ul className="footer-links display-md-flex-colum list-unstyled d-flex flex-column flex-md-row">
            <li className="footer-logo">
              <img
                src="https://sap-lontch.github.io/logo/logo.png"
                width={45}
                height={45}
                className="z-100"
              />
            </li>
            <li className="opacity-75">© {currentYear} SdevSap</li>
            <li className="opacity-50">
              <a href="/#terms">Equipe</a>
            </li>
            <li className="opacity-50">
              <a href="https://github.com/Sdev237?tab=repositories" target="_blank" rel="noopener noreferrer">Projets</a>
            </li>
            <li className="opacity-50">
              <a href="/#security">Areas of Interest</a>
            </li>
            <li className="opacity-50">
              <a href="/#status">Status</a>
            </li>
            <li className="opacity-50">
              <a href="/#contact">Contact</a>
            </li>
            <li className="opacity-50">
              <a href="/#manage-cookies">Manage cookies</a>
            </li>
          </ul>
        </div>
      </footer>
    </Container>
  );
};
