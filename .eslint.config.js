import { defineConfig } from 'eslint-define-config'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import prettier from 'eslint-config-prettier'
import tailwindcss from 'eslint-plugin-tailwindcss'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import storybook from 'eslint-plugin-storybook'

export default defineConfig({
  root: true,
  env: {
    browser: true,
    es2020: true,
    jest: true,
    node: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'tailwindcss',
    'react-refresh',
  ],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/no-custom-classname': 'warn',
    'tailwindcss/no-contradicting-classname': 'error',
  },
  ignorePatterns: ['dist', '.eslintrc.cjs', 'src/stories/'],
  extends: [
    'eslint:recommended',
    react.config,
    typescriptEslint.config,
    prettier.config,
    tailwindcss.config,
    reactHooks.config,
    jsxA11y.config,
    storybook.config,
  ],
})
