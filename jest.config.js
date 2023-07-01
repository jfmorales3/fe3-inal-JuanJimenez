module.exports = {
    transform: {
      '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!axios)'],
    moduleNameMapper: {
      '^.+\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
    },
    testEnvironment: 'jsdom',
  };
  