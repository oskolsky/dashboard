import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import middlewares from 'middlewares'
import rootReducer from 'reducers'

import Dashboard from 'containers/Dashboard'

const enhancer = compose(applyMiddleware(...middlewares))
const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    enhancer
)

import 'stylesheets/styles.scss'

const app = (store) => (
    <Provider store={store}>
        <Dashboard />
    </Provider>
)

ReactDOM.render(
    app(store),
    document.getElementById('app'),
)
