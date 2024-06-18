import eslint from '@eslint/js';
import tslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin';

export default [
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  stylistic.configs['disable-legacy'],
  // stylistic.configs['recommended-flat'],
];
