import { FC, useCallback } from 'react';
import { isSameDay, subMonths } from 'date-fns';
import styled from '@emotion/styled';

import { useDateRange } from '../../hooks/use-date-range';
import { useCalendar } from '../../hooks/use-calendar';

import { dateFormatter } from '../../utils/date-formatter';

import Header from './Header';
import DateInputs from './DateInputs';
import Controllers from './Controllers';

const CalendarContainer = styled.div`
  width: fit-content;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 16px;
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

interface CalendarProps {
  searchDateRange: (start: Date, end: Date) => void;

  closeCalendar: () => void;
}

const Calendar: FC<CalendarProps> = ({ searchDateRange, closeCalendar }) => {
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
      return date >= startD && date <= endD;
    }
    return false;
  }, []);

  const handlePrevMonth = () => setCurrDate(subMonths(currDate, 1));

  const handleNextMonth = () => setCurrDate(subMonths(currDate, -1));

  const handleConfirmSearchDateRange = useCallback(() => {
    if (currStartDate && currEndDate) {
      searchDateRange(currStartDate, currEndDate);
      closeCalendar();
    }
  }, [closeCalendar, currEndDate, currStartDate, searchDateRange]);

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
      <Controllers handleCancel={closeCalendar} handleConfirmSearchDateRange={handleConfirmSearchDateRange} />
    </CalendarContainer>
  );
};

export default Calendar;
