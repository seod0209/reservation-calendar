import { useMemo } from 'react';
import styled from '@emotion/styled';

import {
  button_style_primary,
  button_style_secondary,
  button_style_small,
  button_style_medium,
  button_style_large,
} from './buttonStyle';

const StyledButton = styled.button<{ mode: any; size_style: any }>`
  ${({ size_style }) => size_style}
  ${({ mode }) => mode}
  font-weight: 700;
  border: 0;
  border-radius: 8px;
  cursor: pointer;
`;

interface ButtonProps {
  primary?: boolean;

  backgroundColor?: string;

  size?: 'small' | 'medium' | 'large';

  label: string;

  onClick?: () => void;
}

export const Button = ({ primary = false, size = 'medium', backgroundColor = undefined, label, ...props }: ButtonProps) => {
  const mode = primary ? button_style_primary : button_style_secondary;

  const size_style = useMemo(() => {
    switch (size) {
      case 'small':
        return button_style_small;
      case 'large':
        return button_style_large;
      case 'medium':
      /* intentional falls through */
      default:
        return button_style_medium;
    }
  }, [size]);

  return (
    <StyledButton type="button" mode={mode} size_style={size_style} style={{ backgroundColor }} {...props}>
      {label}
    </StyledButton>
  );
};
