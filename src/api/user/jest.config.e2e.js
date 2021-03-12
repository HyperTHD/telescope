const path = require('path');
const baseConfig = require('../../../jest.config.base');
require('dotenv').config({
  path: path.join(__dirname, '../env.development'),
});

module.exports = {
  ...baseConfig,
  rootDir: '../../..',
  testMatch: ['<rootDir>/src/api/user/test/e2e/*.test.js'],
  collectCoverageFrom: ['<rootDir>/src/api/user/src/**/*.js'],
};
