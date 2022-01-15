import React from 'react';
import styled from '@emotion/styled';
import { Button, colors, Input } from 'amadda-ui';

function SignUpForm() {
  return (
    <SignUpFormBlock>
      <Input />
      <SignUpButton
        href='/sign-in'
        fullWidth
      >
        이건 버튼
      </SignUpButton>
    </SignUpFormBlock>
  );
}

const SignUpFormBlock = styled.div`
  width: 400px;
  height: 300px;
  background-color: ${colors.white};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SignUpButton = styled(Button)`
  margin: 0 120px;
  padding: 0 20px;
`;

export default SignUpForm;
