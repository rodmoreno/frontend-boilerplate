import { Route } from 'react-router'
import { ConnectedRouter } from 'react-router-redux'

import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import configure, { history } from './store'

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
