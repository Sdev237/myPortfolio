import React, { useState, useEffect } from 'react';
import styles from '../../styles/banque.module.scss';

interface Transaction {
  id: number;
  date: string;
  description: string;
  montant: number;
  type: 'crédit' | 'débit';
}

const TransactionsPage: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    // Simuler le chargement des transactions depuis une API
    const transactionsSimulées: Transaction[] = [
      { id: 1, date: '2023-05-01', description: 'Salaire', montant: 2500, type: 'crédit' },
      { id: 2, date: '2023-05-02', description: 'Loyer', montant: 800, type: 'débit' },
      { id: 3, date: '2023-05-03', description: 'Courses', montant: 150, type: 'débit' },
      { id: 4, date: '2023-05-04', description: 'Remboursement', montant: 50, type: 'crédit' },
    ];
    setTransactions(transactionsSimulées);
  }, []);

  return (
    <div className={styles.container}>
      <h1>Mes Transactions</h1>
      <table className={styles.transactionsTable}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Montant</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.montant.toFixed(2)} €</td>
              <td>{transaction.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsPage;