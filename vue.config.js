const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  
  // Use relative paths for static deployment
  publicPath: './',
  
  // Output configuration
  outputDir: 'dist',
  assetsDir: 'static',
  
  // Disable source maps to reduce bundle size
  productionSourceMap: false,
  
  // Configure build for static deployment
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
        minSize: 0,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          }
        }
      }
    }
  },
  
  pluginOptions: {
    vuetify: {
      // Placeholder for Vuetify loader options
    }
  }
});