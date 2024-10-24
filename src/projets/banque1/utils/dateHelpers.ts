export const formatDate = (date: Date | string): string => {
  const dateObject = date instanceof Date ? date : new Date(date);
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).format(dateObject);
};

export const parseDate = (dateString: string): Date => {
  const parsedDate = new Date(dateString);
  if (isNaN(parsedDate.getTime())) {
    throw new Error('Date invalide');
  }
  return parsedDate;
};

export const isDateInRange = (date: Date, startDate: Date, endDate: Date): boolean => {
  return date >= startDate && date <= endDate;
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
};

export const getDateDifference = (date1: Date, date2: Date): number => {
  const diffTime = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};