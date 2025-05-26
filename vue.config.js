const { defineConfig } = require("@vue/cli-service");
const { publish } = require("gh-pages");
module.exports = defineConfig({
  publicPath: `/test/`,
  transpileDependencies: true,
});
