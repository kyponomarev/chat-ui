module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  roots: ['<rootDir>/app'],
  setupFiles: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/static/templates.js'
  ],
  "transform": {
    ".+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  }
};
