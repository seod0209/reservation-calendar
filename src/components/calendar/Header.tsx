import { FC } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  width: 100%;
`;

const Button = styled.button`
  padding: 8px;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  overflow: hidden;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const YearAndMonth = styled.div`
  font-weight: 500;
  letter-spacing: 1.5px;
`;

interface HeaderProps {
  currMonth: number;
  currYear: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}
const Header: FC<HeaderProps> = ({ currMonth, currYear, handlePrevMonth, handleNextMonth }) => {
  const LIMIT_YEAR = 2025;
  const LAST_MONTH = 12;
  return (
    <HeaderContainer>
      <Button onClick={handlePrevMonth}>
        <FaChevronLeft />
      </Button>
      <YearAndMonth>
        {currYear}년 {currMonth}월
      </YearAndMonth>
      <Button disabled={currYear === LIMIT_YEAR && currMonth === LAST_MONTH} onClick={handleNextMonth}>
        <FaChevronRight />
      </Button>
    </HeaderContainer>
  );
};

export default Header;
