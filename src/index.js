import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import ContentView from './components/content/ContentView'
import history from './history'
import configureStore from './store'
import { getContents } from './app/content/actions'

import './index.css'

const store = configureStore(history)
store.dispatch(getContents())

const routes = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Router>
        <Switch>
          <Route exact path="/" component={ContentView}/>
          <Route exact path="/content/:contentTitle/:contentId" component={ContentView} />
        </Switch>
      </Router>
    </ConnectedRouter>
  </Provider>
)

ReactDOM.render(routes, document.getElementById('root'))
