import { FC, useCallback } from 'react';
import { isSameDay, subMonths } from 'date-fns';
import styled from '@emotion/styled';

import { useDateRange } from '../../hooks/use-date-range';
import { useCalendar } from '../../hooks/use-calendar';

import { dateFormatter } from '../../utils/date-formatter';

import Header from './Header';
import DateInputs from './DateInputs';

const CalendarContainer = styled.div`
  width: fit-content;
`;
const RowContainer = styled.div`
  display: flex;
  padding: 8px;
`;

const WeekListContainer = styled.div``;

const Cell = styled.div`
  margin: 6px;
  padding: 6px;
  width: 32px;
  height: 32px;
`;

const DateContainer = styled.div``;

const DateButton = styled.button<{ isselected?: boolean; isactive?: boolean; isinrange?: boolean }>`
  border-radius: ${({ isselected, isinrange }) => (isselected ? '50px' : isinrange ? '0px' : '50px')};

  overflow: hidden;

  color: ${({ isselected }) => (isselected ? '#ffffff' : '#000000')};
  background-color: ${({ isselected, isinrange }) => (isselected ? '#0070c9' : isinrange ? '#bae0f7' : '#ffffff')};
  opacity: ${({ isactive }) => (isactive ? 1 : 0.4)};
  font-size: 16px;

  &:hover,
  active {
    background-color: ${({ isselected }) => (isselected ? '#0070c9' : ' #f2f2f2')};
  }
`;

const Calendar: FC = () => {
  const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];
  const { calendarGroupByWeek, currDate, setCurrDate } = useCalendar();
  const { start, end, currStartDate, currEndDate, isStartError, isEndError, handleStart, handleEnd, handleSelectDate } =
    useDateRange(setCurrDate);

  const checkIsSameDay = useCallback(
    (date: Date, startD?: Date, endD?: Date) => isSameDay(date, startD ?? '') || isSameDay(date, endD ?? ''),
    [],
  );

  const checkIsIsInRange = useCallback((date: Date, startD?: Date, endD?: Date) => {
    if (startD && endD) {
      console.log(date);
      return date >= startD && date <= endD;
    }
    return false;
  }, []);

  const handlePrevMonth = () => setCurrDate(subMonths(currDate, 1));

  const handleNextMonth = () => setCurrDate(subMonths(currDate, -1));

  return (
    <CalendarContainer>
      <DateInputs
        start={start}
        end={end}
        isStartError={isStartError}
        isEndError={isEndError}
        onChangeStart={handleStart}
        onChangeEnd={handleEnd}
      />
      <Header
        currMonth={currDate.getMonth() + 1}
        currYear={currDate.getFullYear()}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <RowContainer>
        {DAY_LIST.map((day) => (
          <Cell key={day}>{day}</Cell>
        ))}
      </RowContainer>
      <WeekListContainer>
        {calendarGroupByWeek.map((week) => (
          <RowContainer key={`week-${dateFormatter(week[0].date)}_${week[0].type}`}>
            {week.map((day) => (
              <DateContainer key={`date-${dateFormatter(day.date)}_${day.type}`}>
                <DateButton
                  isselected={checkIsSameDay(day.date, currStartDate, currEndDate)}
                  isinrange={checkIsIsInRange(day.date, currStartDate, currEndDate)}
                  isactive={day.type === 'curr'}
                  onClick={() => handleSelectDate(day.date)}
                >
                  <Cell>{day.date.getDate()}</Cell>
                </DateButton>
              </DateContainer>
            ))}
          </RowContainer>
        ))}
      </WeekListContainer>
    </CalendarContainer>
  );
};

export default Calendar;
