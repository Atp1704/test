module.exports = {
  extends: ['airbnb', 'plugin:react/recommended'],
  rules: {
    "prettier/prettier": ["error"],
    "linebreak-style": ["error", "unix"], // Enforce LF line endings
    "react/react-in-jsx-scope": "off", // Disable the React in scope rule (React 17+)
    "no-console": "warn" // Warn on console statements
  },
};
