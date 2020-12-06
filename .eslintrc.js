module.exports = {
  env: {
    "es6": true
  },
  extends: ['airbnb-typescript/base'],
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'import/no-extraneous-dependencies': 'off',
    "object-curly-spacing": 'off',
    "max-len": [1, 150],
    'import/no-cycle': 'off',
    'no-alert': 'off',
    'class-methods-use-this': 'off'
  },
  ignorePatterns: ['.eslintrc.js']
};
