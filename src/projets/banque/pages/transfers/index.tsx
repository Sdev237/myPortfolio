import React from 'react';
import Link from 'next/link';
import styles from '../../styles/banque.module.scss';

const TransferPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Hystorique des virements</h1>
      <nav>
        <ul>
          <li><Link href="/accounts">Mes comptes</Link></li>
          <li><Link href="/transactions">Mes transactions</Link></li>
          <li><Link href="/profile">Mon virements</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default TransferPage;