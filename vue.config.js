const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './', // ✅ Set to relative path for static hosts like Netlify

  pluginOptions: {
    vuetify: {}
  }
});
