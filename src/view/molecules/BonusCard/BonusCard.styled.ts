import styled from 'styled-components';

export const BonusCard = styled.div`
  max-width: 335px;
  width: 100%;
  height: 105px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.bg2};
  box-shadow: 2px 2px 16px rgba(0, 0, 0, 0.2);
  padding: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .fireIcon {
    width: 13px;
    height: 17px;
  }

  .arrowIcon {
    width: 35px;
    height: 35px;
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  .subInfo {
    display: flex;
    gap: 8px;
  }
`;
