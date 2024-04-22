import { useState, useCallback, useMemo } from 'react';
import { getDaysInMonth, subMonths } from 'date-fns'; // subMonths

interface DateInfo {
  date: Date;
  type: string;
}

const DAY_OF_WEEK = 7;
const CALENDAR_LENGTH = 35;

export function useCalendar() {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  const currMonth = currDate.getMonth() + 1;
  const currYear = currDate.getFullYear();

  const lastMonth = subMonths(currDate, 1);
  const totalDaysInLastMonth = getDaysInMonth(lastMonth);
  const totalDaysInMonth = getDaysInMonth(currDate);

  const currMonthStartDay = useMemo(() => new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay(), [currDate]);

  const convertDate = useCallback(
    (y: number, m: number, d: number, type: string) => {
      let year;
      let month;
      let day;

      switch (type) {
        case 'prev':
          year = m !== 1 ? y : y - 1;
          month = m !== 1 ? m - 2 : 11;
          day = totalDaysInLastMonth - d;

          return {
            date: new Date(year, month, day),
            type,
          };
        case 'next':
          year = m !== 12 ? y : y + 1;
          month = m !== 12 ? m : 0;
          day = d + 1;

          return {
            date: new Date(year, month, day),
            type,
          };
        case 'curr':
        /* intentional falls through */
        default:
          year = y;
          month = m - 1;
          day = d + 1;
          return {
            date: new Date(year, month, day),
            type,
          };
      }
    },
    [totalDaysInLastMonth],
  );

  const prevDays = useMemo(
    () =>
      Array.from({ length: Math.max(0, currMonthStartDay) }).map((_, idx) => convertDate(currYear, currMonth, idx + 1, 'prev')),
    [convertDate, currMonth, currMonthStartDay, currYear],
  ).sort((a, b) => a.date.getDate() - b.date.getDate());

  const currDays = useMemo(
    () => Array.from({ length: totalDaysInMonth }).map((_, idx) => convertDate(currYear, currMonth, idx, 'curr')),
    [convertDate, currMonth, currYear, totalDaysInMonth],
  );
  const nextDays = useMemo(
    () =>
      Array.from({ length: CALENDAR_LENGTH - prevDays.length - currDays.length }).map((_, idx) =>
        convertDate(currYear, currMonth, idx, 'next'),
      ),
    [convertDate, currDays.length, currMonth, currYear, prevDays.length],
  );

  const currCalendarList = prevDays.concat(currDays, nextDays);

  const calendarGroupByWeek = currCalendarList.reduce((acc: DateInfo[][], curr, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);

    // acc[chunkIndex]이 있으면 acc[chunkIndex]의 값을 할당 없으면, 빈 배열을 할당
    acc[chunkIndex] = acc[chunkIndex] ?? [];
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

  return {
    calendarGroupByWeek,
    currDate,
    currMonth,
    currYear,
    setCurrDate,
  };
}
