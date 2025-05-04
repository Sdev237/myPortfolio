import React from "react";
import "./Projets.scss";

export const Projets = () => {
  return (
    <div>
      <h1>Projets</h1>
      <p>Cette section présente les différents projets que j'ai réalisés.</p>
      <ul>
        <li style={{ "--delay": "0s" }}>
          Projet 1 : Développement d'un site web pour une entreprise
        </li>
        <li style={{ "--delay": "0.1s" }}>
          Projet 2 : Création d'une application mobile pour la gestion des
          tâches
        </li>
        <li style={{ "--delay": "0.2s" }}>
          Projet 3 : Intégration d'un système de paiement sécurisé pour un
           =e-commerce
        </li>
        <li>Projet 1 : Développement d'un site</li>
        <li>
          Projet 2 : Création d'une application mobile pour la planificastion
          des projets
        </li>
        <li>Projet 3 : Intégration d'un système de paiement avec strip</li>
      </ul>
    </div>
  );
};
