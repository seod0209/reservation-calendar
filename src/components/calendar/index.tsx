import { FC } from 'react';
import styled from '@emotion/styled';

const CalendarContainer = styled.div`
  position: relative;
  display: flex;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Calendar: FC = () => {
  const a = '달력';
  return <CalendarContainer>{a}</CalendarContainer>;
};

export default Calendar;
