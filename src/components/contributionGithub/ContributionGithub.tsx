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
import './ContributionGithub.scss';
interface Contribution {
  date: string;
  count: number;
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
        count = Math.min(Math.floor(Math.random() * 4) + 1, maxContributions - totalContributions);
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

 

  const daysOfWeek: string[] = ['Lun', 'Jeu', 'Dim'];
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [activeYear, setActiveYear] = useState('Orange');
  const years = ['Orange', 'Hugo Company', 'CENADI'];

  const gridWidth: number = 53 * 13; // 53 semaines * 13px par case

  const allDays: string[] = Array.from({ length: 371 }, (_, i) => {
    const date: Date = new Date('2023-10-01');
    date.setDate(date.getDate() + i);
    return date.toISOString().split('T')[0];
  });
  const numberOfYears = years.length;

  return (
    <div className="contribution-github">
      <div className="contribution-header">
        <span className="contribution-count ">
          Expérience de travail 
        </span>
        <div className="contribution-settings">
          Paramètres de contribution
          <span style={{marginLeft: '5px', textAlign: 'center'}}>▼</span>
        </div>
      </div>
      <div className="contribution-content p-3" style={{border: '1px solid #333', borderRadius: '0.4rem', overflow: 'auto'}}>
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
            <span className="learn-more">{totalContributions} contributions au cours de la dernière année</span>
            <div className="color-scale">
              <span>Moins</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <span key={level} className={`scale-square level-${level}`} />
              ))}
              <span>Plus</span>
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
      
    </div>
  );
};

export default ContributionGithub;

