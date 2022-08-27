module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': [
      'error',
      'always'
    ],
    // Desactiva error en promesas que no tienen try/catch o then/catch
    '@typescript-eslint/no-floating-promises': 'off'
  },
  ignorePatterns: [
    'dist',
    'src/**/*.js'
  ]
};
