import React, {Component} from 'react';
import {StatusBar, View, Text} from 'react-native';

import CommonStyles from '../commonStyles';
export default class Dashboard extends Component {
  render() {
    return (
      <View
        style={[
          CommonStyles.container,
          CommonStyles.bgColor,
          {justifyContent: 'center', alignContent: 'center'},
        ]}>
        <Text>DashBoard</Text>
      </View>
    );
  }
}
