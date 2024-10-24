export const createTransfer = async (transferData: TransferRequest): Promise<void> => {
  // Implémentation de la logique de création de transfert
  // Par exemple :
  const response = await fetch('/api/transfers', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(transferData),
  });
  if (!response.ok) throw new Error('Erreur lors du transfert');
};