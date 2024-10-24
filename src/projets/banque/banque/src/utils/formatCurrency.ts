export const formatCurrency = (montant: number, devise: string = 'CAD'): string => {
  const options: Intl.NumberFormatOptions = {
    style: 'currency',
    currency: devise,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
    useGrouping: true
  };

  return new Intl.NumberFormat('fr-FR', options).format(montant);
};

export const formatMontantAvecSigne = (montant: number, devise: string = 'CAD'): string => {
  const signe = montant >= 0 ? '+' : '';
  return signe + formatCurrency(Math.abs(montant), devise);
};