var webpack = require('webpack')

module.exports = {
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "@/scss/_variables.scss";`
      }
    }
  },
  configureWebpack: {
    plugins: [

      // ...

      // Jquery loader plugin.
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery'
      })
    ]
  }
}
