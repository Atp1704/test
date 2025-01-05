import reactPlugin from 'eslint-plugin-react';
import importPlugin from 'eslint-plugin-import';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11yPlugin,
    },
    rules: {
      // Example rules from airbnb config
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-unresolved': 'error',
      'jsx-a11y/anchor-is-valid': 'warn',
      'linebreak-style': ['error', 'unix'],
      'no-console': 'warn',
    },
  },
];
