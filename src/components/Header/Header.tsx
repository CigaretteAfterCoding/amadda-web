import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'amadda-ui';

function Header() {
  return (
    <HeaderBlock>
      <Logo>Amadda</Logo>
    </HeaderBlock>
  );
}

const HeaderBlock = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${colors.white};
  position: fixed;
`;

const Logo = styled.div`
  color: ${colors.primary[500]};
  font-weight: bold;
  font-size: 24px;
  margin-left: 20px;
`;

export default Header;
