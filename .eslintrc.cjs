module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:import/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['react-refresh'],
  overrides: [
    {
      files: ['src'],
      parserOptions: {
        project: './jsconfig.json',
      },
    },
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    rules: {
      curly: ['warn', 'multi-line', 'consistent'],
      'no-console': 'off',
      'no-empty-pattern': 'warn',
      'no-duplicate-imports': 'error',
      'import/no-unresolved': 'off',
      'import/export': 'error',
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/FAQ.md#eslint-plugin-import
      // We recommend you do not use the following import/* rules, as TypeScript provides the same checks as part of standard type checking:
      'import/named': 'off',
      'import/namespace': 'off',
      'import/default': 'off',
      'no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        paths: ['src'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': 'warn',
    'import/order': [
      'warn',
      {
        groups: [
          'type',
          'object',
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
      },
    ],
    'import/no-unresolved': 'off',
    'import/named': 'off',
    'import/namespace': 'off',
    'tailwindcss/no-custom-classname': 'off',
  },
};
