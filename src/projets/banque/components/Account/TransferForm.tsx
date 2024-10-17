import React, { useState } from 'react';
import styles from '../../styles/banque.module.css';
import { TransferRequest } from '../../types/transfer';
import { createTransfer } from '../../lib/api/transferApi';
import { formatCurrency } from '../../utils/formatCurrency';

interface TransferFormProps {
  accountId: string;
}

const TransferForm: React.FC<TransferFormProps> = ({ accountId }) => {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const transferData: TransferRequest = {
        sourceAccountId: accountId,
        destinationAccountId: recipient,
        amount: parseFloat(amount)
      };
      await createTransfer(transferData);
      console.log(`Transfert de ${formatCurrency(parseFloat(amount))} depuis le compte ${accountId} vers ${recipient} réussi`);
      setAmount('');
      setRecipient('');
    } catch (error) {
      console.error("Erreur lors du transfert:", error);
    }
  };

  return (
    <form className={styles.transferForm} onSubmit={handleSubmit}>
      <h2>Effectuer un virement</h2>
      <div>
        <label htmlFor="amount">Montant:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="recipient">Bénéficiaire:</label>
        <input
          type="text"
          id="recipient"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          required
        />
      </div>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default TransferForm;