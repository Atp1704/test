import airbnb from 'eslint-config-airbnb';
import reactPlugin from 'eslint-plugin-react';

export default [
  airbnb,
  {
    env: {
      browser: true,
    },
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
