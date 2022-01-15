import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'amadda-ui';
import Header from '@components/Header/Header';
import SignUpForm from './SignUpForm';

function SignUpPage() {
  return (
    <>
      <Header />
      <SignUpPageBlock>
        <SignUpForm />
      </SignUpPageBlock>
    </>
  );
}

const SignUpPageBlock = styled.main`
  background-color: ${colors.gray[300]};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SignUpPage;
