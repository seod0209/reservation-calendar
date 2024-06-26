import { FC, useState } from 'react';
import styled from '@emotion/styled';

import { Button } from '@Components/button/Button';
import Calendar from '@Components/calendar';

const Container = styled.div`
  display: flex;
  justify-content: splace-between;
  align-items: center;
  gap: 16px;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const CalendarButtonContainer = styled.div`
  position: relative;
`;

const CalendarContainer = styled.div<{ isvisible: boolean }>`
  visibility: ${({ isvisible }) => (isvisible ? 'visible' : 'hidden')};
  position: absolute;
  top: 50px;
  left: 0px;
  @media (max-width: 768px) {
    left: -24px;
  }
`;

const Text = styled.span``;

interface CalendarAndHolidayTotalCountProps {
  start: string;

  end: string;

  holidaysCount: number;

  setIsShowList: () => void;

  handleSearchHolidays: (start: Date, end: Date) => void;
}

const CalendarAndHolidayTotalCount: FC<CalendarAndHolidayTotalCountProps> = ({
  start,
  end,
  holidaysCount,
  handleSearchHolidays,
  setIsShowList,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Container>
      <Text>기간: </Text>
      <CalendarButtonContainer>
        <Button label={`${start} - ${end}`} onClick={() => setIsOpen(!isOpen)} />
        <CalendarContainer isvisible={isOpen}>
          <Calendar searchDateRange={handleSearchHolidays} closeCalendar={() => setIsOpen(false)} />
        </CalendarContainer>
      </CalendarButtonContainer>
      <Text>총 공휴일수: </Text>
      <Button label={`${holidaysCount} 개`} onClick={setIsShowList} />
    </Container>
  );
};

export default CalendarAndHolidayTotalCount;
