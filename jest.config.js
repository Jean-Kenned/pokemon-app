module.exports = {
  preset: 'react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
    },
  },
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
  },
  testMatch: [
    '<rootDir>/__tests__/**/*.(test).{js,jsx,ts,tsx}',
    '<rootDir>/__tests__/**/?(*.)(spec|test).{js,jsx,ts,tsx}',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-native/extend-expect',
    '<rootDir>/setupTests.js',
  ],
};
