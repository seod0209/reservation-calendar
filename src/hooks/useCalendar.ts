import { useState } from 'react';
import { getDaysInMonth, subMonths } from 'date-fns';

const DATE_MONTH_FIXER = 1;
const CALENDAR_LENGTH = 35;
const DEFAULT_TRASH_VALUE = 0;
const DAY_OF_WEEK = 7;
const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

export function useCalendar() {
  const [currDate, setCurrDate] = useState<Date>(new Date());
  const MonthDays = getDaysInMonth(currDate);
  console.log(MonthDays);
  return {
    currDate,
    setCurrDate,
  };
}
