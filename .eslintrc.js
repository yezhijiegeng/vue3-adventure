/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  parser:'@typescript-eslint/parser',
  plugins:['typescript-eslint'],
  rules:{
    'no-var': 'error',
    // 优先使用interface,而不是type
     '@typescript-eslint/consistent-type-definitions':[
      "error",
      "interface"
     ]
  }
};
