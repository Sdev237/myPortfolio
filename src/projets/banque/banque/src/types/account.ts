export interface Account {
  id: string;
  userId: string;
  accountNumber: string;
  type: 'Courant' | 'Épargne' | 'Titre';
  balance: number;
  currency: string;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  accountId: string;
  type: 'Crédit' | 'Débit';
  amount: number;
  description: string;
  category?: string;
  date: string;
  status: 'En attente' | 'Complétée' | 'Annulée';
}

export interface TransferRequest {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  description?: string;
}

export interface AccountSummary {
  id: string;
  accountNumber: string;
  type: Account['type'];
  balance: number;
  currency: string;
}