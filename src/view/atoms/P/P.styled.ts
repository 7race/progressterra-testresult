import styled, { css } from 'styled-components';
import type { PProps } from './P.type';

const variants = {
  primary: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary};
  `,
  secondary: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 400;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondary};
  `,
  logo: css`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 16px;
  `,
};

export const P = styled.p<PProps>`
  ${({ variant }) => variants[variant]}
`;
