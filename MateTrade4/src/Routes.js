import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Screens/Login';

const Stack = createStackNavigator();

export default class Routes extends React.Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#c0d4e2'},
          }}
        />
      </Stack.Navigator>
    );
  }
}
