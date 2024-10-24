export interface Transaction {
  id: string;
  accountId: string;
  type: TransactionType;
  amount: number;
  description: string;
  category?: TransactionCategory;
  date: string;
  status: TransactionStatus;
}

export enum TransactionType {
  CREDIT = 'Crédit',
  DEBIT = 'Débit'
}

export enum TransactionStatus {
  PENDING = 'En attente',
  COMPLETED = 'Complétée',
  CANCELLED = 'Annulée'
}

export enum TransactionCategory {
  SALARY = 'Salaire',
  RENT = 'Loyer',
  GROCERIES = 'Courses',
  UTILITIES = 'Factures',
  ENTERTAINMENT = 'Loisirs',
  TRANSPORT = 'Transport',
  HEALTH = 'Santé',
  OTHER = 'Autre'
}

export interface CreateTransactionDto {
  accountId: string;
  type: TransactionType;
  amount: number;
  description: string;
  category?: TransactionCategory;
  date?: string;
}

export interface UpdateTransactionDto {
  description?: string;
  category?: TransactionCategory;
  status?: TransactionStatus;
}

export interface TransactionFilters {
  startDate?: string;
  endDate?: string;
  type?: TransactionType;
  category?: TransactionCategory;
  minAmount?: number;
  maxAmount?: number;
}

export function formatTransactionAmount(transaction: Transaction): string {
  const sign = transaction.type === TransactionType.CREDIT ? '+' : '-';
  return `${sign}${transaction.amount.toFixed(2)} €`;
}

export function getTransactionCategoryIcon(category: TransactionCategory): string {
  // Ici, vous pouvez définir une logique pour retourner une icône 
  // correspondant à chaque catégorie de transaction
  // Par exemple :
  switch (category) {
    case TransactionCategory.SALARY:
      return '💼';
    case TransactionCategory.RENT:
      return '🏠';
    case TransactionCategory.GROCERIES:
      return '🛒';
    // ... autres cas ...
    default:
      return '💡';
  }
}