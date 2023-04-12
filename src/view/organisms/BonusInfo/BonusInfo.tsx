import { useEffect } from 'react';
import {
  setBonusInfo,
  setLoaderOn,
  setLoaderOff,
  createUserToken,
} from '../../../business/features/bonusInfo/bonusInfoSlice';
import { useAppDispatch, useAppSelector } from '../../../business/hooks';
import { P } from '../../atoms/P';
import { BonusCard } from '../../molecules/BonusCard';
import * as S from './BonusInfo.styled';
import type { ComponentPropsWithoutRef, FC } from 'react';

export const BonusInfo: FC<ComponentPropsWithoutRef<'div'>> = ({
  ...props
}) => {
  const dispatch = useAppDispatch();
  const { currentQuantity, dateBurning, forBurningQuantity, isLoading } =
    useAppSelector((state) => state.bonusInfo);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      dispatch(setLoaderOn());
      const accessToken = await dispatch(createUserToken());
      if (accessToken) {
        await dispatch(setBonusInfo(accessToken));
      }
    };

    fetchData()
      .catch((err) => {
        throw new Error('fetch data error: ', err);
      })
      .finally(() => dispatch(setLoaderOff()));
  }, [dispatch]);

  return isLoading ? (
    <div>loading</div>
  ) : (
    <S.BonusInfo {...props}>
      <P variant="logo">ЛОГОТИП</P>
      <img src="iconI.svg" />
      <BonusCard
        className="bonusCard"
        currentQuantity={currentQuantity}
        dateBurning={dateBurning}
        forBurningQuantity={forBurningQuantity}
      />
    </S.BonusInfo>
  );
};
