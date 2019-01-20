import {
  combineReducers,
  createStore,
  applyMiddleware
} from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import contentReducer from '../app/content/reducer'

function createRootReducer(history) {
  return combineReducers({
    router: connectRouter(history),
    contents: contentReducer
  })
}

export default function configureStore(history) {
  return createStore(
    createRootReducer(history),
    composeWithDevTools(
      applyMiddleware(
        routerMiddleware(history),
        thunk
      )
    )
  )
}
