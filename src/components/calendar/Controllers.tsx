import { FC } from 'react';
import styled from '@emotion/styled';
import { Button } from '../button/Button';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  padding: 8px;
  width: 100%;
`;

interface ControllersProps {
  handleCancel: () => void;

  handleConfirmSearchDateRange: () => void;
}
const Controllers: FC<ControllersProps> = ({ handleCancel, handleConfirmSearchDateRange }) => (
  <Container>
    <Button label="Cancel" onClick={handleCancel} />
    <Button primary label="Search" onClick={handleConfirmSearchDateRange} />
  </Container>
);

export default Controllers;
