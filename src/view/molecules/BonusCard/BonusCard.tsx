import { P } from '../../atoms/P/';
import * as S from './BonusCard.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';

interface BonusCardProps {
  currentQuantity: number | null;
  dateBurning: string;
  forBurningQuantity: number | null;
}

export const BonusCard: FC<
  ComponentPropsWithoutRef<'div'> & BonusCardProps
> = ({ currentQuantity, dateBurning, forBurningQuantity, ...props }) => {
  const date = new Date(dateBurning);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattedDate = `${day < 10 ? `0${day}` : day}.${
    month < 10 ? `0${month}` : month
  }`;

  return (
    <S.BonusCard {...props}>
      <div className="info">
        <P variant="primary">{currentQuantity} бонусов</P>

        <div className="subInfo">
          <P variant="secondary">{formattedDate} сгорит</P>
          <img src="fire.svg" className="fireIcon" />
          <P variant="secondary">{forBurningQuantity} бонусов</P>
        </div>
      </div>
      <img src="arrow.svg" className="arrowIcon" />
    </S.BonusCard>
  );
};
