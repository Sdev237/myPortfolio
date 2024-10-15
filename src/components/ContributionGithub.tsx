// components/GitHubContributions.jsx
import React from 'react';
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

export default ContributionGithub;
