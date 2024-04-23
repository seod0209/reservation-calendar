import { FC } from 'react';
import styled from '@emotion/styled';

import { Button } from '@Components/button/Button';

interface ErrorMessageProps {
  message?: string;

  resetErrorBoundary: any;
}

const AlertContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const ErrorMessage: FC<ErrorMessageProps> = ({ message = '', resetErrorBoundary }) => (
  <AlertContainer role="alert">
    <p>Something went wrong:</p>
    <pre style={{ color: 'red' }}>{message}</pre>
    <Button label="Try again" onClick={() => resetErrorBoundary()} />
  </AlertContainer>
);
export default ErrorMessage;
