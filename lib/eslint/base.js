module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: false,
    node: true,
    jest: true
  },
  settings: {
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      }
    }
  },
  overrides: [
    {
      files: ['src/**/*.js'],
      rules: { '@typescript-eslint/no-var-requires': 'off' }
    }
  ],
  rules: {
    radix: 0,
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'class-methods-use-this': 0,
    'no-confusing-arrow': ['warn'],
    'max-len': ['warn'],
    'no-unused-vars': 'off',
    semi: [2, 'always'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'import/extensions': [2, {
      js: 'never',
      jsx: 'never',
      json: 'always',
      ts: 'never',
      tsx: 'never',
    }],
    'no-return-assign': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/no-empty-interface': 0,
    'object-curly-newline': [
      'error', {
        'ObjectExpression': { 'multiline': true, 'minProperties': 5 },
        'ObjectPattern': { 'multiline': true, 'minProperties': 5 },
        'ImportDeclaration': { 'multiline': true, 'minProperties': 5 },
        'ExportDeclaration': { 'multiline': true, 'minProperties': 5 },
      },
    ],
  }
};
