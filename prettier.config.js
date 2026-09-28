/** @type {import("prettier").Config} */

const config = {
  endOfLine: "crlf",
  jsxSingleQuote: true,
  printWidth: 89,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: ["*-*.js"],
    },
  ],
};

export default config;
