export const currencyFormatter = amount => {
  const formatter = new Intl.NumberFormat('en-US', {
    maximumSignificantDigits: 1,
    style: 'currency',
    currency: 'NGN',
  });
  return formatter.format(amount);
};
