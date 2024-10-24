import React from 'react';
import './Test.scss';

const Test = () => {
  return (
    <div className="contribution-activity">
      <h2>Contribution activity</h2>
      <div className="month">October 2024</div>
      <div className="timeline">
        <div className="event">
          <div className="icon">🔄</div>
          <div className="details">
            <h3>Created 12 commits in 2 repositories</h3>
            <ul>
              <li>Sdev237/Landing-page - 8 commits</li>
              <li>Sdev237/myPortfolio - 4 commits</li>
            </ul>
          </div>
        </div>
        <div className="event">
          <div className="icon">📁</div>
          <div className="details">
            <h3>Created 2 repositories</h3>
            <ul>
              <li>Sdev237/Landing-page</li>
              <li>Sdev237/myPortfolio</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;