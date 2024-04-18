import { FC } from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  position: relative;
  display: flex;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const MainPage: FC = () => {
  const a = '메인이랍니다';
  return <MainContainer>{a}</MainContainer>;
};

export default MainPage;
