import React from 'react';
import styles from '../../styles/banque.module.css';

interface AccountSummaryProps {
  accountId: string;
}

const AccountSummary: React.FC<AccountSummaryProps> = ({ accountId }) => {
  // Simuler les données du compte
  const accountData = {
    type: 'Courant',
    balance: 1500,
    transactions: [
      { id: '1', date: '2023-04-01', description: 'Salaire', amount: 2000 },
      { id: '2', date: '2023-04-02', description: 'Loyer', amount: -800 },
    ],
  };

  return (
    <div className={styles.accountSummary}>
      <h2>Résumé du compte {accountId}</h2>
      <p>Type: {accountData.type}</p>
      <p>Solde: {accountData.balance}€</p>
      <h3>Dernières transactions</h3>
      <ul>
        {accountData.transactions.map((transaction) => (
          <li key={transaction.id}>
            {transaction.date} - {transaction.description}: {transaction.amount}€
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AccountSummary;