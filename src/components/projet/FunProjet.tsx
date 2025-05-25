import React from "react";
import { VscRepo } from "react-icons/vsc";
import "./FunProjet.scss";

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const monthNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

const monthInFrench = monthNames[currentMonth];

interface ContributionActivity {
  type: "commits" | "repository";
  count?: number;
  repository: string;
  description: string;
  details?: string;
  date: string;
  language?: string;
  projet1?: string;
  projet2?: string;
  link?: string;
}



const ActivityItem = ({
  activity,
  isLast,
}: {
  activity: ContributionActivity;
  isLast: boolean;
}) => (
  <div className="activity-item">
    <div className="activity-icon ml-6">
      <div className="icon-container">
        <ActivityIcon type={activity.type} />
      </div>
    </div>
    <div className="activity-details">
      <div className="activity-description">
        {activity.type === "commits"
          ? `${activity.details} Créé Dans ${activity.repository}`
          : `Dépôt Créé ${activity.repository}`}
      </div>
      <div className="activity-meta">
        <a
          href={
            activity.type === "commits" ? activity.projet1 : activity.projet2
          }
        >
          <span className="repository-name">
            <span style={{ color: "#a8c2ab" }}>
              Voir le résultat de la page :{" "}
            </span>
            {activity.repository}
          </span>
          {activity.type === "commits" ? (
            <span className="commit-count">{activity.details}</span>
          ) : (
            <>
              <span className="language-tag">{activity.language}</span>
              <span className="date">{activity.date}</span>
            </>
          )}
        </a>
      </div>
      {!isLast && <div className="activity-line" />}
    </div>
    <div className="activity-menu">
      <svg
        aria-label="Collapse"
        className="octicon octicon-fold action-icon"
        viewBox="0 0 16 16"
        version="1.1"
        width="16"
        height="16"
        aria-hidden="true"
        fill="#a8c2ab"
      >
        <path d="M10.896 2H8.75V.75a.75.75 0 0 0-1.5 0V2H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 2ZM8.75 15.25a.75.75 0 0 1-1.5 0V14H5.104a.25.25 0 0 1-.177-.427l2.896-2.896a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25Zm-6.5-6.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z"></path>
      </svg>
    </div>
  </div>
);

export const FunProjet = () => {
  return (
    <div className="contribution-activity">
      <h2 className="activity-title"></h2>
      <div className="activity-list">
        <div className="activity-month">
          <h5 className="month-name">
            {monthInFrench} {currentYear}
          </h5>
          <div className="month-line" />
        </div>
        {contributionActivity.map((activity, index) => (
          <ActivityItem
            key={index}
            activity={activity}
            isLast={index === contributionActivity.length - 1}
          />
        ))}
      </div>
      <div className="show-more-container p-4">
        <a href="https://github.com/Sdev237?tab=repositories" className="show-more-button">Show more activities</a>
      </div>
    </div>
  );
};
