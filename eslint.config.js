import airbnb from 'eslint-config-airbnb';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  airbnb,
  {
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': ['error'],
      'linebreak-style': ['error', 'unix'],
      'react/react-in-jsx-scope': 'off',
      'no-console': 'warn',
    },
  },
];
