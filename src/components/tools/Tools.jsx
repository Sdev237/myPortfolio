import React from "react";
import "./Tools.scss";
import { Footer } from "../footer/Footer";

const toolsData = [
  {
    title: "Création de vidéos",
    items: ["Final Cut Pro", "Screen Studio", "OBS", "Excalidraw"],
  },
  {
    title: "Code",
    items: ["VSCode", "GitHub's Copilot", "GitHub", "Git"],
  },
  {
    title: "Création de contenu",
    items: ["TypeFully", "Cal.com", "ShowCode"],
  },
  {
    title: "SaaS dont je suis utilisateur",
    items: ["ChatGPT", "Jomo", "NomadList", "MailerLite", "Front"],
  },
  {
    title: "Applications MacOS",
    items: [
      "Raycast",
      "CleanShot X",
      "CleanMyMac",
      "1Password",
      "Things",
      "TimeMator",
      "SparkApp",
      "iTerm",
      "Clop",
      "Endel",
      "BetterDictation",
      "Beeper",
      "NUMI",
    ],
  },
  {
    title: "CI/CD",
    items: [
      "Vercel",
      "Upstash",
      "Neon.tech",
      "Trigger.dev",
      "Render.com",
      "Porkbun",
      "Plausible",
      "Stripe",
    ],
  },
  {
    title: "Design",
    items: ["Figma", "Colors for Shadcn/UI", "PixelMator"],
  },
  {
    title: "Pile de développement",
    items: ["React", "Next.js", "TailwindCSS", "TypeScript", "Shadcn"],
  },
];

export const Tools = () => (
  <div className="tools-root">
    <div className="tools-header-container">
      <div className="tools-header">
        <img
          className="tools-avatar"
          role="img"
          aria-label="Avatar de Jedeon Sap"
        />
        <div className="tools-header-text">
          <h2>Jedeon Lontchi</h2>
        </div>
      </div>
      <p className="tools-subtitle"><em>The tool I use everyday.</em></p>
    </div>
    <div className="tools-columns">
      {toolsData.map((section) => (
        <div className="tools-column" key={section.title}>
          <h4>{section.title}</h4>
          <ul>
            {section.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    <Footer />
  </div>
);

export default Tools;