/** @type {import('prettier').Config} */
const prettierConfig = {
  plugins: ["prettier-plugin-embed", "prettier-plugin-sql", "prettier-plugin-tailwindcss"],
  printWidth: 120,
  semi: true,
  trailingComma: "es5",
};

/** @type {import('prettier-plugin-embed').PrettierPluginEmbedOptions} */
const prettierPluginEmbedConfig = {
  embeddedSqlIdentifiers: ["sql"],
};

/** @type {import('prettier-plugin-sql').SqlBaseOptions} */
const prettierPluginSqlConfig = {
  language: "sqlite",
  keywordCase: "upper",
};

const config = {
  ...prettierConfig,
  ...prettierPluginEmbedConfig,
  ...prettierPluginSqlConfig,
};

module.exports = config;
