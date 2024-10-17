import React from 'react';
import Link from 'next/link';
import { LogoutButton } from '../Auth/LogoutButton';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav>
        <Link href="/">Accueil</Link>
        <Link href="/accounts">Comptes</Link>
        <Link href="/transactions">Transactions</Link>
        <Link href="/transfers">Virements</Link>
      </nav>
      <LogoutButton />
    </header>
  );
};

export default Header;