import React from 'react'
import { VscGitCommit, VscKebabVertical, VscRepo, VscRepoForked } from 'react-icons/vsc'
import './FunProjet.scss'

export const FunProjet = () => {


  
  interface ContributionActivity {
    type: 'commits' | 'repository';
    count?: number;
    repository: string;
    description: string;
    details?: string;
    date: string;
    language?: string;
    projet1?: string;
  }
  const contributionActivity: ContributionActivity[] = [
    {
      type: 'commits',
      count: 2,
      repository: 'Sdev237/Landing Page',
      description: 'Created 8 commits in 1 repository',
      details: '8 commits',
      projet1: 'https://landing-page-432f4.web.app',
      date: 'October 2024'
    },
    {
      type: 'repository',
      repository: 'Sdev237/myPortfolio',
      description: 'Created 1 repository',
      language: 'TypeScript',
      date: 'Oct 15'
    }
  ];
  
  return (
      <div className="contribution-activity">
        <h2 className="activity-title"></h2>
        <div className="activity-list">
          <div className="activity-month">
            <h5 className="month-name">October 2024</h5>
            <div className="month-line" />
          </div>
          {contributionActivity.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon ml-4">
                <div className="icon-container">
                  {activity.type === 'commits' 
                    ? <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" fill='#8b949e' className="octicon octicon-repo-push">
                        <path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.493 2.493 0 0 1 3.5 9h3.25a.75.75 0 0 1 0 1.5H3.5a1 1 0 0 0 0 2h5.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5Zm13.23 7.79h-.001l-1.224-1.224v6.184a.75.75 0 0 1-1.5 0V9.066L10.28 10.29a.75.75 0 0 1-1.06-1.061l2.505-2.504a.75.75 0 0 1 1.06 0L15.29 9.23a.751.751 0 0 1-.018 1.042.751.751 0 0 1-1.042.018Z"></path>
                      </svg>
                    : <VscRepo className='color-white' />}
                </div>
              </div>
              <div className="activity-details">
                <div className="activity-description">
                  {activity.type === 'commits' 
                    ? `Created ${activity.details} in ${activity.repository}`
                    : `Created repository ${activity.repository}`
                  }
                </div>
                <div className="activity-meta">
                  <a href={`${activity.projet1}`}>
                    <span className="repository-name"><span style={{color: '#a8c2ab'}}>View the result of the page : </span>{`${activity.repository}`}</span>
                    {activity.type === 'commits' ? (
                      <span className="commit-count">{`${activity.details}`}</span>
                    ) : (
                      <>
                        <span className="language-tag">{activity.language}</span>
                        <span className="date">{activity.date}</span>
                      </>
                    )}
                  </a>
                </div>
                {index < contributionActivity.length - 1 && <div className="activity-line" />}
              </div>
              <div className="activity-menu">
                <svg aria-label="Collapse" className="octicon octicon-fold action-icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true" fill="#a8c2ab"><path d="M10.896 2H8.75V.75a.75.75 0 0 0-1.5 0V2H5.104a.25.25 0 0 0-.177.427l2.896 2.896a.25.25 0 0 0 .354 0l2.896-2.896A.25.25 0 0 0 10.896 2ZM8.75 15.25a.75.75 0 0 1-1.5 0V14H5.104a.25.25 0 0 1-.177-.427l2.896-2.896a.25.25 0 0 1 .354 0l2.896 2.896a.25.25 0 0 1-.177.427H8.75v1.25Zm-6.5-6.5a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM6 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 6 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5ZM12 8a.75.75 0 0 1-.75.75h-.5a.75.75 0 0 1 0-1.5h.5A.75.75 0 0 1 12 8Zm2.25.75a.75.75 0 0 0 0-1.5h-.5a.75.75 0 0 0 0 1.5h.5Z"></path></svg>
              </div>
            </div>
          ))}
        </div>
        <div className="show-more-container p-4">
          <button className="show-more-button">Show more activity</button>
        </div>
      </div>
  )
}