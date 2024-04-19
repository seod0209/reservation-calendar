import { FC } from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-beteen;
  align-items: center;
`;

const Button = styled.button`
  border-radius: 50px;
  overflow: hidden;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const YearAndMonth = styled.div`
  font-weight: 500;
`;

interface HeaderProps {
  currMonth: number;
  currYear: number;
  handlePrevMonth: () => void;
  handleNextMonth: () => void;
}
const Header: FC<HeaderProps> = ({ currMonth, currYear, handlePrevMonth, handleNextMonth }) => (
  <HeaderContainer>
    <Button onClick={handlePrevMonth}>이전</Button>
    <YearAndMonth>
      {currYear}년 {currMonth}월
    </YearAndMonth>
    <Button disabled={currYear === 2025 && currMonth === 12} onClick={handleNextMonth}>
      다음
    </Button>
  </HeaderContainer>
);

export default Header;
