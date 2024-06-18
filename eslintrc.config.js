import eslint from "@eslint/js";
import tslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";

export default [
  eslint.configs.recommended,
  ...tslint.configs.recommended,
  prettier,
];

console.log(stylistic.configs["disable-legacy"]);
