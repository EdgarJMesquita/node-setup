module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-typescript",
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@controllers": "./src/controllers",
          "@repositories": "./src/repositories",
          "@services": "./src/services",
          "@entities": ["./src/entities"],
          "@utils": ["./src/utils"],
          "@middlewares": ["./src/middlewares"],
        },
      },
    ],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
  ],
  ignore: ["**/*.spec.ts"],
};
