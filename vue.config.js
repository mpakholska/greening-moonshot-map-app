const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  
  // Add this for dev server deployment
  devServer: {
    allowedHosts: 'all', // Disable host checking
    // Or alternatively:
    // host: '0.0.0.0',
    // port: process.env.PORT || 8080
  },
  
  pluginOptions: {
    vuetify: {
      // Placeholder for Vuetify loader options
    }
  }
});