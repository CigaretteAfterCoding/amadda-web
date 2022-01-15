import React from 'react';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Global } from '@emotion/react';
import { baseCSS } from 'amadda-ui';

const queryClient = new QueryClient();

function AmaddaApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Global styles={baseCSS} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default AmaddaApp;
