import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

export const getServerSideProps = () => {
  return { props: {} };
};

function SignUpPage() {
  return (
    <SignUpPageBlock>
      회원가입 페이지
      <Link href="/">
        홈으로
      </Link>
    </SignUpPageBlock>
  );
}

const SignUpPageBlock = styled.main`

`;

export default SignUpPage;
