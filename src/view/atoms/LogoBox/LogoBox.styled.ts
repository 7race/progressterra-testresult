import styled from 'styled-components';

export const LogoBox = styled.div`
  height: 284px;
  position: relative;
  padding: 56px 25px;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 148px;
    left: 0;
    bottom: 0;
    background: linear-gradient(180deg, #d2333e 0%, #f54b55 100%);
  }
`;
