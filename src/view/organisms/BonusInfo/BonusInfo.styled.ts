import styled from 'styled-components';
import { LogoBox } from '../../atoms/LogoBox/LogoBox.styled';

export const BonusInfo = styled(LogoBox)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .bonusCard {
    position: absolute;
    z-index: 1;
    left: 50%;
    transform: translateX(-50%);
    bottom: 99px;
  }
`;
