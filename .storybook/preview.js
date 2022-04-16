import { Global } from '@emotion/react';
import { baseCSS } from 'amadda-ui'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <Global styles={baseCSS} />
      <Story />
    </>
  ),
];