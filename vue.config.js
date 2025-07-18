const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,
  
  // Copy files to dist folder
  chainWebpack: config => {
    config.plugin('copy').tap(([options]) => {
      options[0].patterns.push({
        from: 'public/WebMap30-04.xlsx',
        to: 'WebMap30-04.xlsx'
      })
      options[0].patterns.push({
        from: 'public/countries.json',
        to: 'countries.json'
      })
      return [options]
    })
  },
  
  pluginOptions: {
    vuetify: {}
  }
});