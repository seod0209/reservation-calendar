import { FC } from 'react';
import styled from '@emotion/styled';

import { Input } from '../input/Input';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  width: 100%;
`;

const DateInputContatiner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: center;
  align-items: flex-start;
  padding: 8px;
  width: 140px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

interface DateInputsProps {
  start?: string;

  end?: string;

  isStartError?: boolean;

  isEndError?: boolean;

  onChangeStart: (date: string) => void;

  onChangeEnd: (date: string) => void;
}
const DateInputs: FC<DateInputsProps> = ({
  start = undefined,
  end = undefined,
  isStartError = false,
  isEndError = false,
  onChangeStart,
  onChangeEnd,
}) => (
  <Container>
    <DateInputContatiner>
      <Label>시작일</Label>
      <Input
        placeholder="YYYY/MM/DD"
        value={start || ''}
        max={10}
        isError={isStartError}
        onChange={(e) => onChangeStart(e.target.value)}
      />
    </DateInputContatiner>

    <DateInputContatiner>
      <Label>종료일</Label>
      <Input
        placeholder="YYYY/MM/DD"
        value={end || ''}
        max={10}
        disabled={start === undefined}
        isError={isEndError}
        onChange={(e) => onChangeEnd(e.target.value)}
      />
    </DateInputContatiner>
  </Container>
);

export default DateInputs;
