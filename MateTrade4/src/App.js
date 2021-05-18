import 'react-native-gesture-handler';
import React, {Component} from 'react';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import Routes from './routes';
import {StatusBar} from 'react-native';

const composeEnhancers = compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor="#297dec" barStyle={'light-content'} />
        <Routes />
      </Provider>
    );
  }
}

export default App;
