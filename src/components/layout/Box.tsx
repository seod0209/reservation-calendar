import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import styled from '@emotion/styled';

const BoxContainer = styled.div<{ dir?: string }>`
  display: flex;
  flex-direction: ${({ dir }) => dir ?? 'column'};
  padding: 20px;
  width: 100%;

  border-radius: 16px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #ffffff;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  dir?: 'row' | 'column';
}

const Box: FC<PropsWithChildren<BoxProps>> = ({ dir = 'column', children = undefined, ...props }) => (
  <BoxContainer dir={dir} {...props}>
    {children}
  </BoxContainer>
);

export default Box;
