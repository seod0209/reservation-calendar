import { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import { subMonths } from 'date-fns';

import { useCalendar } from '../../hooks/use-calendar';

import Header from './Header';

const CalendarContainer = styled.div`
  overflow: hidden;
`;
const RowContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px;
`;

const WeekListContainer = styled.div``;

const Cell = styled.div`
  padding: 6px;
  width: 32px;
  height: 32px;

  text-align: center;
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
  const { calendarGroupByWeek, currDate, setCurrDate } = useCalendar();

  const handleSelectDate = useCallback(
    (date: number) => {
      const today = currDate.getDate();
      const diff = date - today;

      const selected = new Date(currDate.setDate(today + diff));
      setCurrDate(selected);
    },
    [currDate, setCurrDate],
  );

  const handlePrevMonth = () => setCurrDate(subMonths(currDate, 1));

  const handleNextMonth = () => setCurrDate(subMonths(currDate, -1));
  console.log(currDate, currDate.getMonth());
  return (
    <CalendarContainer>
      <Header
        currMonth={currDate.getMonth() + 1}
        currYear={currDate.getFullYear()}
        handlePrevMonth={handlePrevMonth}
        handleNextMonth={handleNextMonth}
      />
      <RowContainer>
        {DAY_LIST.map((day) => (
          <Cell>{day}</Cell>
        ))}
      </RowContainer>
      <WeekListContainer>
        {calendarGroupByWeek.map((week) => (
          <RowContainer key={`${week[0]}`}>
            {week.map((day) => (
              <DateButton
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
