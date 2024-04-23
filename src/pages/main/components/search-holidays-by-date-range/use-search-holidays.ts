import { useCallback, useState } from 'react';
import { PublicHolidayDto } from 'apis/type';
import { useSuspenseQueries } from '@tanstack/react-query';
import { dateFormatter } from '../../../../utils/date-formatter';
import { fetchPublicHolidays } from '../../../../apis/index';

export interface HolidayInfo {
  holidaysYear: number;
  holidays?: PublicHolidayDto[];
}

export function useSearchHolidays() {
  const countryCode = 'KR';
  const [yearList, setYearList] = useState<number[]>([]);
  const [startDate, setStartDate] = useState<Date>();
  const [endDate, setEndDate] = useState<Date>();

  const { data: holidayList } = useSuspenseQueries({
    queries: yearList.map((year) => ({
      queryKey: ['fetc-holiday-list', year],
      queryFn: () => fetchPublicHolidays(year, countryCode),
    })),
    combine: (results) => ({
      data: results.map(({ data }, idx) => {
        let holidayInfo!: HolidayInfo;
        if (startDate !== undefined && endDate !== undefined) {
          const dayList = data
            ? data.filter((d) => {
                const day = new Date(d.date);
                day.setHours(0);

                return day >= startDate && day <= endDate;
              })
            : [];

          holidayInfo = { holidaysYear: yearList[idx], holidays: dayList };
        }
        return holidayInfo;
      }),
      pending: results.some((result) => result.isPending),
    }),
  });

  const handleSearchHolidays = useCallback((start: Date, end: Date) => {
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const range = endYear - startYear;
    const years = Array.from({ length: range + 1 }, (_, idx) => startYear + idx);
    setYearList(years);
    setStartDate(start);
    setEndDate(end);
  }, []);

  const holidaysCount = holidayList.map((h) => (h.holidays ? h.holidays.length : 0)).reduce((prev, curr) => prev + curr, 0);

  return {
    holidayList,
    holidaysCount,
    start: startDate ? dateFormatter(startDate) : '시작일',
    end: endDate ? dateFormatter(endDate) : '종료일',
    handleSearchHolidays,
  };
}
