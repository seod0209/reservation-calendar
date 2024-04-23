import { useCallback, useEffect, useState } from 'react';

import { dateFormatter } from '../utils/date-formatter';
import { checkValidDate } from '../utils/check-valid-date';
import { checkValidDateFormat } from '../utils/check-valid-date-format';
import { checkValidLimitDate } from '../utils/check-valid-date-limit';
import { calcDiffInDays } from '../utils/calc-difference-in-days';

export function useDateRange(setCurrDate: (date: Date) => void) {
  const [start, setStart] = useState<string>();
  const [end, setEnd] = useState<string>();
  const [currStartDate, setCurrStartDate] = useState<Date>();
  const [currEndDate, setCurrEndDate] = useState<Date>();
  const [isStartError, setIsStartError] = useState<boolean>(false);
  const [isEndError, setIsEndError] = useState<boolean>(false);

  const checkValidateEndDate = useCallback(
    (value: string) => {
      if (currStartDate) {
        const limitEndDate = checkValidLimitDate(value).date;

        return calcDiffInDays(currStartDate, limitEndDate);
      }
    },
    [currStartDate],
  );

  const handleStart = useCallback(
    (value: string) => {
      if (isStartError) {
        setIsStartError(false);
      }

      setStart(checkValidDateFormat(value));

      if (value.length === 10) {
        if (checkValidDate(value)) {
          const day = checkValidLimitDate(value);
          setStart(day.value);
          setCurrStartDate(day.date);
          setCurrDate(day.date);

          if (currEndDate === undefined) {
            setEnd(day.value);
            setCurrEndDate(day.date);
          }
        } else {
          setIsStartError(true);
        }
      }
    },
    [currEndDate, isStartError, setCurrDate],
  );

  const handleEnd = useCallback(
    (value: string) => {
      if (isEndError) {
        setIsEndError(false);
      }

      setEnd(checkValidDateFormat(value));

      if (value.length === 10) {
        if (checkValidDate(value)) {
          const day = checkValidateEndDate(value);
          setEnd(day?.value);
          setCurrEndDate(day?.date);
        } else {
          setIsEndError(true);
        }
      }
    },
    [checkValidateEndDate, isEndError],
  );

  const handleSelectDate = useCallback(
    (date: Date) => {
      const dateString = dateFormatter(date);
      if (currStartDate === undefined || currStartDate > date) {
        handleStart(dateString);
        setCurrDate(date);
      } else {
        handleEnd(dateString);
      }
    },
    [currStartDate, handleEnd, handleStart, setCurrDate],
  );

  useEffect(() => {
    if (currEndDate !== undefined && currStartDate !== undefined) {
      if (currEndDate < currStartDate) {
        setEnd(start);
        setCurrEndDate(currStartDate);
      } else {
        const day = calcDiffInDays(currStartDate, currEndDate);
        setEnd(day?.value);
        setCurrEndDate(day?.date);
      }
    }
  }, [checkValidateEndDate, currEndDate, currStartDate, start]);

  return {
    start,
    end,
    currStartDate,
    currEndDate,
    isStartError,
    isEndError,
    handleStart,
    handleEnd,
    handleSelectDate,
  };
}
