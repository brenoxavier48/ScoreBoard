import React, {useState} from 'react';
import {
  StatusBar,
} from 'react-native';
import Home from '../screens/Home'
import { Provider } from 'react-redux'
import store from '../store'



const App = (props: any) => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <Home></Home>
    </Provider>
  )
}

export default App;
