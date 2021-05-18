import React, {Component} from 'react';
import colors from '../constants/colors';
import {Footer, FooterTab, Button, Text, Icon} from 'native-base';
import {StackNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';

import DashBoard from '../screens/dashboard';
import Quotes from '../screens/quotes';
import Indicators from '../screens/indicators';

import News from '../screens/news';
import Trade from '../screens/trade';
import Message from '../screens/messages';
import {connect} from 'react-redux'; //to pass functions
import {bindActionCreators} from 'redux';
import Login from '../screens/login';
import Register from '../screens/register';


var user;

const QuoteStack = createStackNavigator(
  {
    Home: {
      screen: Quotes,
      navigationOptions: {
        title: 'Play',
        tabBarIcon: () => (
          <Icon type="AntDesign" name="arrowsalt" style={{fontSize: 30}} />
        ),
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

QuoteStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  for (let i = 0; i < navigation.state.routes.length; i++) {
    if (
      navigation.state.routes[i].routeName == 'Login'
    ) {
      tabBarVisible = false;
    }
  }

  return {
    tabBarVisible,
  };
};

const IndicatorStack = createStackNavigator(
  {
    Indicator: {
      screen: Indicators,
      navigationOptions: {
        tabBarIcon: () => <Icon name="settings" style={{fontSize: 30}} />,
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Indicator',
  },
);

const TradeStack = createStackNavigator(
  {
    Trade: {
      screen: Trade,
      navigationOptions: {
        tabBarIcon: () => <Icon name="settings" style={{fontSize: 30}} />,
        header: null,
      },
    },
  },
  {
    initialRouteName: 'Trade',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const NewsStack = createStackNavigator(
  {
    News: {
      screen: News,
      navigationOptions: {
        tabBarIcon: () => <Icon name="settings" style={{fontSize: 30}} />,
        header: null,
      },
    },
  },
  {
    initialRouteName: 'News',
    // initialRouteName: 'LeaderBoardDetails',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);

const MessageStack = createStackNavigator(
  {
    Message: {
      screen: Message,
      navigationOptions: {
        tabBarIcon: () => <Icon name="settings" style={{fontSize: 30}} />,
        header: null,
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      },
    },
    Register: {
      screen: Register,
      navigationOptions: {
        header: null,
        tabBarVisible: false,
      },
    },
  },
  {
    initialRouteName: 'Message',
    navigationOptions: {
      gesturesEnabled: false,
    },
  },
);


MessageStack.navigationOptions = ({navigation}) => {
  let tabBarVisible = true;
  for (let i = 0; i < navigation.state.routes.length; i++) {
    if (
      navigation.state.routes[i].routeName == 'Login' || navigation.state.routes[i].routeName == 'Register' 
    ) {
      tabBarVisible = false;
    }
  }
  return {
    tabBarVisible,
  };
};

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: QuoteStack,

      navigationOptions: ({navigation}) => ({
        tabBarIcon: () => (
          <Icon type="AntDesign" name="arrowsalt" style={{fontSize: 24}} />
        ),
      }),
    },
    Indicator: {
      screen: IndicatorStack,
      navigationOptions: ({screenProps}) => ({
        tabBarIcon: () => <Icon name="bar-graph" type='Entypo' style={{fontSize: 24}} />,
      }),
    },

    Trade: {
      screen: TradeStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: () => <Icon name="graph" type='SimpleLineIcons' style={{fontSize: 26}} />,
      }),
    },

    News: {
      screen: NewsStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: () => <Icon name="news" type='Entypo' style={{fontSize: 30}} />,
      }),
    },

    Message: {
      screen: MessageStack,
      navigationOptions: ({navigation}) => ({
        tabBarIcon: () => <Icon name="message1" type='AntDesign' style={{fontSize: 30}} />,
      }),
    },
  },
  {
    initialRouteName: 'Home',
    navigationOptions: {
      gesturesEnabled: false,
    },
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      showIcon: true,

      style: {
        backgroundColor: colors.grayLight,
        height: 60,
        borderColor: '#fff',
      },
      allowFontScaling: false,
    },
  },
);

function mapStateToProps(state) {
  //user = state.auth.user;
  return {
    // auth: state.auth,
    // isLoading: state.isLoading,
    // isLandscapeLoading: state.isLandscapeLoading,
    // user: state.auth.user,
  };
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators({}, dispatch)};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(createAppContainer(Tabs));
// export default createAppContainer(Tabs);
