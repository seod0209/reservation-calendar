import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '../../../../components/button/Button';
import Calendar from '../../../../components/calendar';

const Container = styled.div`
  display: flex;
  justify-content: splace-between;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const CalendarButtonContainer = styled.div`
  position: relative;
`;

const CalendarContainer = styled.div<{ isvisible: boolean }>`
  visibility: ${({ isvisible }) => (isvisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 50px;
  left: 0px;
`;

const TotalCount = styled.div``;

interface CalendarAndHolidayTotalCountProps {
  start: string;

  end: string;

  holidaysCount: number;

  handleSearchHolidays: (start: Date, end: Date) => void;
}

const CalendarAndHolidayTotalCount: FC<CalendarAndHolidayTotalCountProps> = ({
  start,
  end,
  holidaysCount,
  handleSearchHolidays,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <TotalCount> 총 공휴일수: {holidaysCount}</TotalCount>
      <CalendarButtonContainer>
        <Button label={`${start} - ${end}`} onClick={() => setIsOpen(!isOpen)} />
        <CalendarContainer isvisible={isOpen}>
          <Calendar searchDateRange={handleSearchHolidays} closeCalendar={() => setIsOpen(false)} />
        </CalendarContainer>
      </CalendarButtonContainer>
    </Container>
  );
};

export default CalendarAndHolidayTotalCount;
