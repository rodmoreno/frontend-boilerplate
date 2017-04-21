module.exports = neutrino => {
  neutrino.config.module
    .rule('style')
      .use('css')
      .tap(options => {
        options.localIdentName = '[local]___[hash:base64:5]'
        options.modules = true
        options.sourceMap = true
        return options
      })

  neutrino.config
    .when(process.env.NODE_ENV === 'production', config =>
      config
        .plugin('copy')
        .tap(args => {
          args[1].ignore = ['*.js*', '*.css']
          return args
        }))
}
