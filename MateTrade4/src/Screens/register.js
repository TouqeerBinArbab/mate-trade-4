import React, {Component} from 'react';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  TextInput,
  StatusBar,
  BackHandler,
  ActivityIndicator,
  Alert,
} from 'react-native';
import CommonStyles from '../commonStyles';
import {Item, Input, Container, Icon, Toast, Picker} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import images from '../constants/images';
import AsyncStorage from '@react-native-community/async-storage';
import colors from '../constants/colors';

class Register extends Component {
  state = {
    email: '',
    show: false,
    password: '',
    showLoader: false,
    hidePassword: true,
    showForgotPassword: false,
    selected2: '',
    subItems: [
      {
        name: 'Are you Doctor',
        route: 'Create',
      },
      {
        name: 'Are you Patient',
        route: 'Create',
      },
    ],
  };

  constructor(props) {
    super(props);
  }

  setPasswordVisibility = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };

  render() {
    return (
      <View style={[CommonStyles.container, {backgroundColor: '#297dec'}]}>
        <KeyboardAwareScrollView style={CommonStyles.container}>
          <View
            style={[
              CommonStyles.horizontalContainer,
              {backgroundColor: '#297dec'},
            ]}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                onPress={() => this.props.navigation.goBack()}
                type="Ionicons"
                style={[
                  CommonStyles.textSizeIcon,
                  {paddingVertical: 10},
                  CommonStyles.margin,
                  CommonStyles.textColorWhite,
                ]}
                name="md-chevron-back-sharp"
              />
              <Text
                style={[
                  CommonStyles.fontRegular,
                  CommonStyles.padding,
                  CommonStyles.textSizeLarge,
                  CommonStyles.textColorWhite,
                  CommonStyles.centerText,
                  CommonStyles.centerElement,
                  {alignSelf: 'center'},
                ]}>
                Account registeration
              </Text>
            </View>
          </View>
          <View style={[{marginHorizontal: 15, marginVertical: 25}]}>
            <View style={[CommonStyles.container, {marginHorizontal: 30}]}>
              <View
                style={[
                  CommonStyles.container,
                  {
                    justifyContent: 'center',
                    marginTop: 30,
                  },
                ]}>
                <View style={[CommonStyles.container, {marginBottom: 20}]}>
                  <Text
                    style={[
                      CommonStyles.fontMedium,
                      CommonStyles.textColorWhite,
                      {textAlign: 'center', fontSize: 22, marginVertical: 20},
                    ]}>
                    Register your account
                  </Text>
                 
                </View>

                <View style={{marginVertical: 10}}>
                  <Item style={CommonStyles.loginItemStyle}>
                    <Input
                      value={this.state.email}
                      onChangeText={(username) =>
                        this.setState({email: username})
                      }
                      name="username"
                      placeholder={'Email Address'}
                      placeholderTextColor="#000000"
                      returnKeyType="next"
                      autoCapitalize="none"
                      selectionColor="gray"
                      autoCompleteType="email"
                      keyboardType="email-address"
                      style={[
                        CommonStyles.fontMedium,
                        CommonStyles.black,

                        CommonStyles.textSizeNormal,
                      ]}
                    />
                  </Item>
                  <Item
                    style={[CommonStyles.loginItemStyle, {marginVertical: 5}]}>
                    <Input
                      secureTextEntry={this.state.hidePassword}
                      value={this.state.password}
                      onChangeText={(password) => this.setState({password})}
                      autoCapitalize="none"
                      returnKeyType="done"
                      selectionColor="#000000"
                      autoCompleteType="password"
                      textContentType="password"
                      name="password"
                      placeholder={'Password'}
                      placeholderTextColor="#000000"
                      style={[
                        CommonStyles.fontMedium,
                        CommonStyles.textSizeNormal,
                        ,
                        {color: 'black'},
                      ]}
                    />
                    <Icon
                      onPress={() => this.setPasswordVisibility()}
                      name="eye"
                      style={{
                        color: '#000000',
                        position: 'absolute',
                        right: 5,
                      }}
                    />
                  </Item>
                </View>

                <View style={{marginVertical: 10, marginHorizontal: 5}}>
                  <TouchableOpacity
                    style={[{borderRadius: 3, backgroundColor: colors.yellow}]}>
                    <Text
                      style={[
                        CommonStyles.textColorBlack,
                        CommonStyles.fontMedium,
                        {textAlign: 'center', paddingVertical: 15},
                      ]}>
                      Get account
                    </Text>
                  </TouchableOpacity>
                </View>
                <Text
                  style={[
                    CommonStyles.textColorWhite,
                    CommonStyles.fontMedium,
                    {textAlign: 'center', paddingVertical: 15},
                  ]}>
                  OR
                </Text>
                <View style={{marginVertical: 10, marginHorizontal: 5}}>
                  <TouchableOpacity

                    style={[{borderRadius: 3, backgroundColor: colors.white}]}>
                     <Icon
                      name="facebook-with-circle"
                      type='Entypo'
                      style={{
                        color: '#297dec',
                        position: 'absolute',
                        left: 5,
                        paddingVertical: 10
                      }}
                    /> 
                    <Text
                      style={[
                        
                        CommonStyles.fontMedium,
                        {textAlign: 'center', paddingVertical: 15, color: '#297dec'},
                      ]}>
                      continue with Facebook
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[
                      {
                        borderRadius: 3,
                        marginTop: 10,
                        backgroundColor: colors.white,
                      },
                    ]}>
                       <Icon
                      name="google"
                      type='FontAwesome'
                      style={{
                        color: '#DB4437',
                        position: 'absolute',
                        fontSize: 24,
                        left: 5,
                        paddingVertical: 12
                      }}
                    />
                    <Text
                      style={[
                        CommonStyles.textColorBlack,
                        CommonStyles.fontMedium,
                        {textAlign: 'center', paddingVertical: 15},
                      ]}>
                      Sign in with Google
                    </Text>
                  </TouchableOpacity>
                </View>

                <View
                  style={[
                    {
                      marginTop: 20,
                      flexDirection: 'row',
                      alignSelf: 'center',
                      margin: 20,
                    },
                  ]}>
                  <Text
                    style={[
                      CommonStyles.fontMedium,

                      CommonStyles.textSizeSmall,
                      CommonStyles.textColorWhite,

                      {fontSize: 14, padding: 10},
                    ]}>
                    If you have an account, please
                  </Text>
                  <Text
                    onPress={() => this.props.navigation.navigate('Login')}
                    style={[
                      CommonStyles.fontMedium,
                      CommonStyles.textSizeSmall,
                      {paddingVertical: 10, fontSize: 14, color: colors.yellow},
                    ]}>
                    login
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  handleBackButton = () => {
    Alert.alert(
      'Exit App',
      'Exiting the application?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      },
    );
    return true;
  };

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  }
}

export default Register;
