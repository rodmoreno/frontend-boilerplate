const rucksack = require('rucksack-css')

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
    ['neutrino-middleware-postcss', {
      plugins: [rucksack({ autoprefixer: true })]
    }],
  ],
  env: {
    NODE_ENV: {
      production: {
        use: ['neutrino-middleware-extractstyles']
      }
    }
  }
}
  