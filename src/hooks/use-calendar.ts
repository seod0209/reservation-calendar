import { useEffect, useState } from 'react';
import { getDaysInMonth } from 'date-fns'; // subMonths

interface DateInfo {
  date: number;
  type: string;
}

const DAY_OF_WEEK = 7;
const CALENDAR_LENGTH = 35;

export function useCalendar(currStartDate?: Date) {
  const [currDate, setCurrDate] = useState<Date>(new Date());

  const currMonth = currDate.getMonth() + 1;
  const currYear = currDate.getFullYear();

  const lastMonth = new Date(currDate.getFullYear(), currDate.getMonth() - 1, currDate.getDate());

  const totalDaysInLastMonth = getDaysInMonth(lastMonth);
  const totalDaysInMonth = getDaysInMonth(currDate);

  const currMonthStartDay = new Date(currDate.getFullYear(), currDate.getMonth(), 1).getDay();

  const prevDays = Array.from({ length: Math.max(0, currMonthStartDay) }).map((_, idx) => ({
    date: totalDaysInLastMonth - idx,
    type: 'prev',
  }));
  const currDays = Array.from({ length: totalDaysInMonth }).map((_, i) => ({ date: i + 1, type: 'curr' }));
  const nextDays = Array.from({ length: CALENDAR_LENGTH - prevDays.length - currDays.length }).map((_, idx) => ({
    date: idx + 1,
    type: 'next',
  }));

  const currCalendarList = prevDays.concat(currDays, nextDays);

  const calendarGroupByWeek = currCalendarList.reduce((acc: DateInfo[][], curr, idx) => {
    const chunkIndex = Math.floor(idx / DAY_OF_WEEK);

    // acc[chunkIndex]이 있으면 acc[chunkIndex]의 값을 할당 없으면, 빈 배열을 할당
    acc[chunkIndex] = acc[chunkIndex] ?? [];
    acc[chunkIndex].push(curr);
    return acc;
  }, []);

  useEffect(() => {
    if (currStartDate) setCurrDate(currStartDate);
  }, [currStartDate]);

  return {
    calendarGroupByWeek,
    currDate,
    currMonth,
    currYear,
    setCurrDate,
  };
}
