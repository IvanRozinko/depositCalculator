export const uahFormatter = (number: number) => {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'currency',
    currency: 'UAH'
  });
  return formatter.format(number);
}

export const decimalFormatter = (number: number) => {
  const formatter = new Intl.NumberFormat('uk-UA', {
    style: 'decimal',
  });
  return formatter.format(number);
}

export const stripNoneNumbers = (string: string) => {
  return string.replace(/[^0-9.]/g, '');
}