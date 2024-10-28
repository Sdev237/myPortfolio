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

  const daysOfWeek: string[] = ['Lun', 'Jeu', 'Dim'];
  const months: string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const [activeYear, setActiveYear] = useState('Orange');
  const years = ['Orange', 'Hugo Company', 'CENADI'];
  const company = [
    { name: 'Orange Digital Center', logo: 'https://c.woopic.com/logo-orange.png', poste: 'Analyste Programmeur', date: '2022-2023' },
    { name: 'Hugo Company LTD', logo: '../app/fonts/hugo.png', poste: 'Gestionnaire du parc informatique', date: '2020-2022' },
    { name: 'CENADI',logo:"https://i0.wp.com/www.cenadi.cm/wp-content/uploads/2020/09/armoiries_logo_cenadi.png?fit=180%2C80&amp;ssl=1", poste: 'Développeur Full Stack', date: '2018' }
  ];

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
        <span className="contribution-count opacity-75">
          {totalContributions} contributions au cours de la dernière année
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
            <span className="learn-more">Découvrez comment nous comptons les contributions</span>
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
      
      <div className="contribution-header">
        <span className="contribution-count pt-3 ">
          Experience Professionnelle
        </span>
      </div>
      <div className="contribution-content p-1" style={{borderRadius: '0.4rem', overflow: 'auto'}}>
        <div className='yearSelector d-flex flex-wrap justify-content-between align-items-center w-100 gap-3'>
          {company.map((comp, idx) => (
            <div key={idx} className='text-center'>
              <div className="yearName col-12 col-md-12 col-lg-12 text-start d-flex flex-column z-1">
                <div className="d-flex align-items-center">
                  {comp.logo && <img src={comp.logo} alt={comp.name} width={40} height={30} className='me-2'/>}
                  {comp.name}
                </div>
                <span className='opacity-50'>{comp.poste}</span>
              </div>
              <div className="yearDate text-start opacity-75">{comp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContributionGithub;

