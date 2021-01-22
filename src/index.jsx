import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import './assets/main.scss'
import store from './store/store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
