import { useState } from 'react';
import { getDaysInMonth } from 'date-fns'; // subMonths

const DAY_OF_WEEK = 7;
const CALENDAR_LENGTH = 35; // 최대 5주(7일 기준)
const EMPTY_DAY_VALUE = 0;

export function useCalendar() {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  const totalDaysInMonth = getDaysInMonth(currDate);
  const currMonthStartDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay();

  const prevDays = Array.from({ length: Math.max(0, currMonthStartDay) }).map(() => EMPTY_DAY_VALUE);
  const currDays = Array.from({ length: totalDaysInMonth }).map((_, i) => i + 1);
  const nextDays = Array.from({ length: CALENDAR_LENGTH - prevDays.length - currDays.length }).map(() => EMPTY_DAY_VALUE);

  const currCalendarList = prevDays.concat(currDays, nextDays);

  const calendarGroupByWeek = currCalendarList.reduce((acc: number[][], curr, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);

    // acc[chunkIndex]이 있으면 acc[chunkIndex]의 값을 할당 없으면, 빈 배열을 할당
    acc[chunkIndex] = acc[chunkIndex] ?? [];
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

  return {
    calendarGroupByWeek,
    currDate,
    setCurrDate,
  };
}
