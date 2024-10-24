import React from 'react';
import { Transaction } from '../../types/transaction';
import { formatCurrency } from '../../utils/formatCurrency';
import { formatDate } from '../../utils/dateHelpers';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

const TransactionHistory: React.FC<TransactionHistoryProps> = ({ transactions }) => {
  return (
    <div className="transaction-history">
      <h3>Historique des transactions</h3>
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <span>{formatDate(transaction.date)}</span>
            <span>{transaction.description}</span>
            <span>{formatCurrency(transaction.amount)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;