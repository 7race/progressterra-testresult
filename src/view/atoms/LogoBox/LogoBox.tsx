import * as S from './LogoBox.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const LogoBox: FC<ComponentPropsWithoutRef<'div'>> = ({
  children,
  ...props
}) => <S.LogoBox {...props}>{children}</S.LogoBox>;
