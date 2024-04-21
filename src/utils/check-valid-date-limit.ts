export function checkValidLimitDate(value: string) {
  const [year, month, day] = value.split('/');
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const limitDate = new Date('2025-12-31');

  return date > limitDate ? { date: limitDate, value: '2025/12/31' } : { date, value };
}
