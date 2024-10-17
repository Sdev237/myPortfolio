{/*import React from 'react';
import GitHubContributions from 'react-github-contributions';

const ContributionGithub = () => {
  return (
    <div>
      <aside className='' style={{border: '1px  #333', borderRadius: '0.4rem'}}>
        <GitHubContributions username="Sdev237" />
      </aside>
    </div>
  );
};

export default ContributionGithub;*/}

import React, { useState } from 'react';
import { VscGitCommit, VscKebabVertical, VscRepo, VscRepoForked } from 'react-icons/vsc';
import './ContributionGithub.scss';
interface Contribution {
  date: string;
  count: number;
}

interface ContributionActivity {
  type: 'commits' | 'repository';
  count?: number;
  repository: string;
  description: string;
  details?: string;
  date: string;
  language?: string;
}

const ContributionGithub: React.FC = () => {
  const [showYearSelector, setShowYearSelector] = useState(false);

  const generateContributions = (): { contributions: Contribution[], totalContributions: number } => {
    const contributions: Contribution[] = [];
    const startDate: Date = new Date('2023-10-01');
    const endDate: Date = new Date('2024-09-30');
    let totalContributions: number = 0;
    const maxContributions: number = 800;

    for (let d: Date = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const randomFactor: number = Math.random();
      let count: number = 0;
      if (randomFactor > 0.7) {
        count = Math.min(Math.floor(Math.random() * 8) + 1, maxContributions - totalContributions);
      }
      totalContributions += count;
      contributions.push({
        date: d.toISOString().split('T')[0],
        count: count
      });
      if (totalContributions >= maxContributions) break;
    }

    return { contributions, totalContributions };
  };

  const { contributions, totalContributions } = generateContributions();

  const getColor = (count: number): string => {
    if (count === 0) return '#161b22';
    if (count < 3) return '#0e4429';
    if (count < 6) return '#006d32';
    if (count < 9) return '#26a641';
    return '#39d353';
  };

  const daysOfWeek: string[] = ['Mon', 'Wed', 'Fri'];
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [activeYear, setActiveYear] = useState('2024');
  const years = ['2024', '2023', '2022'];

  const gridWidth: number = 53 * 13; // 53 semaines * 13px par case

  const allDays: string[] = Array.from({ length: 371 }, (_, i) => {
    const date: Date = new Date('2023-10-01');
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });

  const contributionActivity: ContributionActivity[] = [
    {
      type: 'commits',
      count: 2,
      repository: 'Sdev237/myPortfolio',
      description: 'Created 2 commits in 1 repository',
      details: '2 commits',
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
    <div className="contribution-github">
      <div className="contribution-header">
        <span className="contribution-count">{totalContributions} contributions in the last year</span>
        <div className="contribution-settings">Contribution settings</div>
      </div>
      <div className="contribution-content">
        <div className="contribution-graph">
          <div className="months-container" style={{ width: `${gridWidth}px`}}>
            {months.map((month, index) => (
              <div key={index} className="month">{month}</div>
            ))}
          </div>
          <div className="days-and-squares">
            <div className="days-of-week">
              {daysOfWeek.map((day, index) => (
                <div key={index} className="day">{day}</div>
              ))}
            </div>
            <div className="squares-container">
              {allDays.map((date) => {
                const contribution = contributions.find(c => c.date === date) || { date, count: 0 };
                return (
                  <div
                    key={date}
                    className={`contribution-square level-${contribution.count}`}
                    title={`${date}: ${contribution.count} contributions`}
                  />
                );
              })}
            </div>
          </div>
          <div className="graph-footer">
            <span className="learn-more">Learn how we count contributions</span>
            <div className="color-scale">
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span key={level} className={`scale-square level-${level}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </div>
        <div className='yearSelector'>
      {years.map((year) => (
        <button 
          key={year}
          className={`yearSelectorButton ${year === activeYear ? 'active' : ''}`}
          onClick={() => setActiveYear(year)}
        >
          {year}
        </button>
      ))}
    </div>
      </div>
      
      <div className="contribution-activity">
        <h2 className="activity-title">Contribution activity</h2>
        <div className="activity-list">
          <div className="activity-month">
            <h5 className="month-name">October 2024</h5>
            <div className="month-line" />
          </div>
          {contributionActivity.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className="activity-icon">
                <div className="icon-container">
                  {activity.type === 'commits' ? <VscRepoForked /> : <VscRepo />}
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
                  <span className="repository-name">{activity.repository}</span>
                  {activity.type === 'commits' ? (
                    <span className="commit-count">{activity.details}</span>
                  ) : (
                    <>
                      <span className="language-tag">{activity.language}</span>
                      <span className="date">{activity.date}</span>
                    </>
                  )}
                </div>
                {index < contributionActivity.length - 1 && <div className="activity-line" />}
              </div>
              <div className="activity-menu">
                <VscKebabVertical />
              </div>
            </div>
          ))}
        </div>
        <div className="show-more-container">
          <button className="show-more-button">Show more activity</button>
        </div>
      </div>
    </div>
  );
};

export default ContributionGithub;