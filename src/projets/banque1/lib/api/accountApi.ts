import { Account, Transaction, TransferRequest } from '../../types/account';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getAccount = async (accountId: string): Promise<Account> => {
  const response = await fetch(`${API_URL}/accounts/${accountId}`);
  if (!response.ok) {
    throw new Error('Échec de la récupération du compte');
  }
  return response.json();
};

export const getAccountTransactions = async (accountId: string): Promise<Transaction[]> => {
  const response = await fetch(`${API_URL}/accounts/${accountId}/transactions`);
  if (!response.ok) {
    throw new Error('Échec de la récupération des transactions');
  }
  return response.json();
};

export const createTransfer = async (transferData: TransferRequest): Promise<void> => {
  const response = await fetch(`${API_URL}/transfers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(transferData),
  });
  if (!response.ok) {
    throw new Error('Échec du transfert');
  }
};