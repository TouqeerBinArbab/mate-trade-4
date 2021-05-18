import React, {Component, useState} from 'react';
import {connect} from 'react-redux'; //to pass functions
import {bindActionCreators} from 'redux';
import colors from './constants/colors';
import Login from './screens/login';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Root, Spinner} from 'native-base';

import Tabs from './components/tabs';

const Styles = {
  header__wrapper: {
    top: 0,
    width: '100%',
    position: 'absolute',
    padding: 20,
  },
  back_button: {
    marginTop: 5,
    height: 20,
  },
};

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        title: 'Login',
        
      },
    },
    Tabs: {
      screen: ({ navigation }) => <Tabs screenProps={{ rootNavigation: navigation}} />,
      navigationOptions: {
          header: null,
      }
  },
  },
  {
    initialRouteName: 'Tabs',
    navigationOptions: {
      headerStyle: {backgroundColor: colors.white},
      gesturesEnabled: false,
    },
  },
);

const MainRoute = createAppContainer(RootStack);

class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      isLoading: false,
    };
  }

  render() {
    return (
      <Root style={{flex: 1}}>
        <MainRoute />
      </Root>
    );
  }
}

function mapStateToProps(state) {
  // console.log("State======>>>>>>>", state);
  //pass the providers
  // setCount(state.auth.user.count)

  return {
    // auth: state.auth,
    // isLoading: state.isLoading,
    // isLandscapeLoading: state.isLandscapeLoading,
  };
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({}, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
