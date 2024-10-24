import React from 'react';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><Link href="/accounts">Mes comptes</Link></li>
          <li><Link href="/transactions">Historique des transactions</Link></li>
          <li><Link href="/transfers">Effectuer un virement</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;