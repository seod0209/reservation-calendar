import { FC, useCallback } from 'react';
import { subMonths } from 'date-fns';
import styled from '@emotion/styled';

import { useDateRange } from '../../hooks/use-date-range';
import { useCalendar } from '../../hooks/use-calendar';

import Header from './Header';
import DateInputs from './DateInputs';

const CalendarContainer = styled.div`
  width: fit-content;
`;
const RowContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px;
`;

const WeekListContainer = styled.div``;

const Cell = styled.div`
  padding: 8px;
  width: 32px;
  height: 32px;
`;

const DateButton = styled.button<{ isselected?: boolean; isactive?: boolean }>`
  border-radius: 50px;
  overflow: hidden;
  background-color: ${({ isselected }) => (isselected ? '#0070c9' : '#ffffff')};
  color: ${({ isselected }) => (isselected ? '#ffffff' : '#000000')};
  opacity: ${({ isactive }) => (isactive ? 1 : 0.4)};
  font-size: 16px;
  &:hover {
    background-color: ${({ isselected }) => (isselected ? '#0070c9' : ' #f2f2f2')};
  }
`;

const Calendar: FC = () => {
  const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];
  const { start, end, currStartDate, currEndDate, isStartError, isEndError, handleStart, handleEnd } = useDateRange();
  const { calendarGroupByWeek, currDate, setCurrDate } = useCalendar(currStartDate);
  console.log('마지막', currEndDate);
  const handleSelectDate = useCallback(
    (date: number) => {
      const today = currDate.getDate();
      const diff = date - today;

      const selected = new Date(currDate.setDate(today + diff));
      setCurrDate(selected);
    },

    // 선택한 날짜의 년/월/일 정보를 가져온다.
    // calendarGroupByWeek 에 date외에도 month, year정보 추가 필요
    [currDate, setCurrDate],
  );

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
          <RowContainer key={`${week[0].date}_${week[0].type}`}>
            {week.map((day) => (
              <DateButton
                key={`${day.date}-${day.type}`}
                isselected={day.date === currDate.getDate()}
                isactive={day.type === 'curr'}
                onClick={() => handleSelectDate(day.date)}
              >
                <Cell>{day.date}</Cell>
              </DateButton>
            ))}
          </RowContainer>
        ))}
      </WeekListContainer>
    </CalendarContainer>
  );
};

export default Calendar;
