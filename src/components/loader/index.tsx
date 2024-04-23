import styled from '@emotion/styled';
import { FC } from 'react';

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #000000;
  opacity: 0.7;
  z-index: 20;
`;
const Spinner = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px auto;

  border: 10px solid #e4e0ff;
  border-bottom: 10px solid #191a2a;
  border-radius: 50%;

  animation: load 1.5s linear infinite;
  @keyframes load {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader: FC = () => (
  <LoaderContainer>
    <Spinner />
  </LoaderContainer>
);
export default Loader;
