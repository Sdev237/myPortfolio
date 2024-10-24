import React from 'react';
import Link from 'next/link';
import styles from '../../styles/banque.module.scss';

const AccountsPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenue sur votre banque en ligne</h1>
      <nav>
        <ul>
          <li><Link href="/accounts">Mes comptes</Link></li>
          <li><Link href="/transactions">Mes transactions</Link></li>
          <li><Link href="/profile">Mes virements</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default AccountsPage;