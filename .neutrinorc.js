module.exports = {
  use: [
    'neutrino-preset-react',
    neutrino => neutrino.config
      .entry('vendor')
        .add('react')
        .add('react-dom')
        .add('react-redux')
        .add('react-router')
        .add('react-router-redux')
        .add('redux'),
    neutrino => neutrino.config.module.rule('style').use('css').options({ modules: true }),
    ['neutrino-preset-react', {
      plugins: {
        'rucksack-css': {autoprefixer: true}
      }
    }]
  ],
  env: {
    NODE_ENV: {
      production: {
        use: ['neutrino-middleware-extractstyles']
      }
    }
  }
}
  