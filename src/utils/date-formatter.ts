export function dateFormatter(time: Date) {
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, '0');
  const date = String(time.getDate()).padStart(2, '0');

  return `${year}/${month}/${date}`;
}
