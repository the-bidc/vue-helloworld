module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  //reporters: ['bamboo-jest-reporter', 'default'],
  silent: false,
  transformIgnorePatterns: ["/node_modules/(?!(axios)/)"],
  // transform: {
  //   '^.+\\.ts?$': 'ts-jest',
  //   '^.+\\.tsx?$': 'babel-jest'
  // }
}
