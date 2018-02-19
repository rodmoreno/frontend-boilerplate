
import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'

import { logger } from '../middleware'
import rootReducer from '../reducers'

export const history = createHistory()
const middleware = routerMiddleware(history)

export default function configure (initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    middleware
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
