module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential"],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "no-unused-vars":"off"
  }
};
