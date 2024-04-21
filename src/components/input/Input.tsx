import styled from '@emotion/styled';
import { FC, InputHTMLAttributes } from 'react';

const StyledInput = styled.input<{ iserror: boolean }>`
  padding-left: 8px;
  padding-right: 8px;

  width: 100%;
  height: 40px;
  border: 1px solid #d6d6d6;
  border-radius: 4px;

  color: #333333
  background-color: #ffffff;
  outline: none;

  font-size: 16px;
  line-height: 20px;

  &:focus{
    box-shadow: ${({ iserror }) => (iserror ? '#fd3d1f80' : '#83c0fd80')} 0px 0px 0px 3px;
  }
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isError?: boolean;
}

export const Input: FC<InputProps> = ({ isError = false, ...props }) => <StyledInput iserror={isError} {...props} />;
