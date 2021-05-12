import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Root} from 'native-base';
import Routes from './Routes';
import CommonStyles from './CommonStyles';
import {StatusBar, SafeAreaView} from 'react-native';
class App extends React.Component {
  navigationRef: any;
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Root>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle={'dark-content'}
        />
        <SafeAreaView style={CommonStyles.container}>
          <NavigationContainer
            ref={(navigationRef) => (this.navigationRef = navigationRef)}>
            <Routes />
          </NavigationContainer>
        </SafeAreaView>
      </Root>
    );
  }
}

export default App;
