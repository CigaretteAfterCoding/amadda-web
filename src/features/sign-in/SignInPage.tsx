import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

function SignInPage() {
  return (
    <SignInPageBlock>
      로그인 페이지
      <Link href="/">
        홈으로
      </Link>
    </SignInPageBlock>
  );
}

const SignInPageBlock = styled.main`

`;

export default SignInPage;
