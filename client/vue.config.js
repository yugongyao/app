module.exports = {
  devServer: {
    // open: true,
    host:"localhost",
    port: '8080', 
   proxy:{
      '/api': {
        target: 'http://10.20.152.18:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  
}