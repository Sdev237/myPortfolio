import React from 'react';
import { useRouter } from 'next/router';
import AccountSummary from '../../components/Account/AccountSummary';
import TransferForm from '../../components/Account/TransferForm';
import styles from '../../styles/banque.module.css';

const AccountPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <h1>Compte {id}</h1>
      <AccountSummary accountId={id as string} />
      <TransferForm accountId={id as string} />
    </div>
  );
};

export default AccountPage;