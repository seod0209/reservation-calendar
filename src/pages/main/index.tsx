import { FC } from 'react';
import styled from '@emotion/styled';
import SearchHolidays from './components/search-holidays';

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;
const MainInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 30px 40px;
  width: 100%;
  max-width: 1200px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MainPage: FC = () => (
  <MainContainer>
    <MainInner>
      <SearchHolidays />
    </MainInner>
  </MainContainer>
);

export default MainPage;
