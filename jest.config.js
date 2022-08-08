module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  testMatch: [
    '**/__tests__/unit/**/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/**/*.(js|jsx|ts|tsx)|**/__tests__/*.(spec|test).(js|jsx|ts|tsx)|**/__tests__/unit/intergration/**/*.(spec|test).(js|jsx|ts|tsx)'
  ]
}
