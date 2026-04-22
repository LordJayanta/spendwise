module.exports = function (api) {
  api.cache(true);

  const isProduction = process.env.NODE_ENV === "production";

  const plugins = [];

  // Remove consoles ONLY in production
  if (isProduction) {
    plugins.push(["transform-remove-console", { exclude: ["error", "warn"] }]);
  }

  return {
    presets: ["babel-preset-expo"],
    plugins: plugins,
  };
};
