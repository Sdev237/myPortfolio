import { TransferRequest } from '../../types/transfer';

export const createTransfer = async (transferData: TransferRequest): Promise<void> => {
xemple :
  const response = await fetch('/api/transfers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transferData),
  });
  if (!response.ok) throw new Error('Erreur lors du transfert');
};