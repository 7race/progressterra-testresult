import * as S from './P.styled';
import type { PProps } from './P.type';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const P: FC<ComponentPropsWithoutRef<'p'> & PProps> = ({
  children,
  ...props
}) => <S.P {...props}>{children}</S.P>;
