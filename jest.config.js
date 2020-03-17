process.env.NODE_ENV = 'test';
process.env.HOST = '0.0.0.0';
process.env.PORT = 3030;

module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js', '!data/keyMap.js', '!/node_modules/'],
  clearMocks: true,
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/coverage/'],
  setupFilesAfterEnv: ['./tests/setup.js'],
};
