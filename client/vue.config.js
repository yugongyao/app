module.exports = {
  devServer: {
    // open: true,
   proxy:{
      '/api': {
        target: 'http://10.20.157.18:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  
}