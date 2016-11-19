import React, { Component } from 'react'
import { Provider } from 'react-redux'
import codePush from "react-native-code-push"
import configureStore from './store/configureStore'
import App from './containers/App'

const store = configureStore()

console.log("Code push:", codePush);

class TodoClass extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default codePush(TodoClass)
