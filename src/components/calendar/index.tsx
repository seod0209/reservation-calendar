import { FC, useCallback } from 'react';
import styled from '@emotion/styled';
import { useCalendar } from '../../hooks/useCalendar';

const CalendarContainer = styled.div`
  overflow: hidden;
`;
const RowContainer = styled.div`
  display: flex;
  gap: 16px;
  padding: 8px;
`;

const WeekListContainer = styled.div``;

const Cell = styled.div<{ isselected?: boolean; ishidden?: boolean }>`
  visibility: ${({ ishidden }) => (ishidden ? 'hidden' : 'visible')};
  padding: 4px;
  width: 28px;
  height: 28px;
  border-radius: 50px;
  text-align: center;
  background-color: ${({ isselected }) => (isselected ? '#0070c9' : '#ffffff')};
  color: ${({ isselected }) => (isselected ? '#ffffff' : '#000000')};
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

  return (
    <CalendarContainer>
      <RowContainer>
        {DAY_LIST.map((day) => (
          <Cell>{day}</Cell>
        ))}
      </RowContainer>
      <WeekListContainer>
        {calendarGroupByWeek.map((week) => (
          <RowContainer key={`${week[0]}`}>
            {week.map((d) => (
              <Cell key={`${d}`} onClick={() => handleSelectDate(d)} isselected={d === currDate.getDate()} ishidden={d === 0}>
                {d}
              </Cell>
            ))}
          </RowContainer>
        ))}
      </WeekListContainer>
    </CalendarContainer>
  );
};

export default Calendar;
