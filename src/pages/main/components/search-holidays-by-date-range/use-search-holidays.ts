import { useQueries } from 'react-query';

import { useCallback, useState } from 'react';
import { PublicHolidayDto } from 'apis/type';
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

  const queries = useQueries(
    yearList.map((year) => ({ queryKey: `holiday-list-${year}`, queryFn: () => fetchPublicHolidays(year, countryCode) })),
  );

  const handleSearchHolidays = useCallback((start: Date, end: Date) => {
    const startYear = start.getFullYear();
    const endYear = end.getFullYear();
    const range = endYear - startYear;
    const years = Array.from({ length: range + 1 }, (_, idx) => startYear + idx);
    setYearList(years);
    setStartDate(start);
    setEndDate(end);
  }, []);

  const holidayList: HolidayInfo[] = queries.map(({ data }, idx) => {
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
  });

  const isloading = queries.some((r) => r.isLoading);
  const holidaysCount = holidayList.map((h) => (h.holidays ? h.holidays.length : 0)).reduce((prev, curr) => prev + curr, 0);

  return {
    holidayList,
    holidaysCount,
    isloading,
    start: startDate ? dateFormatter(startDate) : '시작일',
    end: endDate ? dateFormatter(endDate) : '종료일',
    handleSearchHolidays,
  };
}
