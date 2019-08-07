module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  'extends': [
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
    'no-return-assign': ['warn'],
    'max-len': ['warn'],
    'no-unused-vars': 'off',
    semi: [2, 'always'],
    '@typescript-eslint/indent': ['error', 2],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { args: 'none' }],
    'import/extensions': ['.js', '.jsx', '.json', '.ts', '.tsx'],
    'no-param-reassign': [2, { props: false }]
  }
};
