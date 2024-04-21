import { differenceInDays, addDays } from 'date-fns';
import { dateFormatter } from './date-formatter';

const LIMIT_RANGE = 365 * 2;

export function calcDiffInDays(start: Date, end: Date) {
  let endDate = end;

  const diffDays = differenceInDays(end, start);

  if (diffDays > LIMIT_RANGE) {
    endDate = addDays(start, LIMIT_RANGE);
  }

  return { date: endDate, value: dateFormatter(endDate) };
}
