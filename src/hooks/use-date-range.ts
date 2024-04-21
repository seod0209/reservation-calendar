import { useCallback, useEffect, useState } from 'react';

import { checkValidDate } from '../utils/check-valid-date';
import { checkValidDateFormat } from '../utils/check-valid-date-format';
import { checkValidLimitDate } from '../utils/check-valid-date-limit';
import { calcDiffInDays } from '../utils/calc-difference-in-days';

export function useDateRange() {
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

  const handleStart = (value: string) => {
    if (isStartError) {
      setIsStartError(false);
    }

    setStart(checkValidDateFormat(value));

    if (value.length === 10) {
      if (checkValidDate(value)) {
        const day = checkValidLimitDate(value);
        setStart(day.value);
        setCurrStartDate(day.date);

        if (currEndDate === undefined) {
          setEnd(day.value);
          setCurrEndDate(day.date);
        }
      } else {
        setIsStartError(true);
      }
    }
  };

  const handleEnd = (value: string) => {
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
  };

  useEffect(() => {
    if (currEndDate !== undefined && currStartDate !== undefined && currEndDate < currStartDate) {
      setEnd(start);
      setCurrEndDate(currStartDate);
    }
  }, [currEndDate, currStartDate, start]);

  return {
    start,
    end,
    currStartDate,
    currEndDate,
    isStartError,
    isEndError,
    handleStart,
    handleEnd,
  };
}
