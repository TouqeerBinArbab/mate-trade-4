import {Icon} from 'native-base';
import React, {Component} from 'react';
import {
  StatusBar,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';

import CommonStyles from '../commonStyles';
import colors from '../constants/colors';
import images from '../constants/images';

export default class Messages extends Component {
  render() {
    return (
      <View style={[CommonStyles.container]}>
        <View
          style={[
            CommonStyles.horizontalContainer,
            {backgroundColor: '#297dec'},
          ]}>
          <View style={{flexDirection: 'row'}}>
            <Icon
              onPress={() => this.props.navigation.goBack()}
              type="FontAwesome"
              style={[
                CommonStyles.textSizeIcon,
                {paddingVertical: 10},
                CommonStyles.margin,
                CommonStyles.textColorWhite,
              ]}
              name="bars"
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
              Messages
            </Text>
          </View>

          <Icon
            type="AntDesign"
            style={[
              CommonStyles.textSizeIcon,
              CommonStyles.transparent,
              CommonStyles.padding,
              CommonStyles.margin,
            ]}
            name="close"
          />
        </View>
        <View style={[CommonStyles.container]}>
          <ImageBackground
            style={[CommonStyles.container, CommonStyles.backgroundImage]}
            source={images.backImage}>
            <View
              style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                type="AntDesign"
                name="message1"
                style={[
                  {paddingVertical: 10, fontSize: 70},
                  CommonStyles.margin,
                  CommonStyles.textColorBlack,
                ]}
              />
              <Text>No Messages</Text>
            </View>
            <View
              style={[
                CommonStyles.horizontalContainer,
                {
                  backgroundColor: colors.grayLight,

                  width: '100%',
                  alignSelf: 'flex-end',
                },
              ]}>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Register')}
                style={[
                  CommonStyles.padding,
                  {
                    backgroundColor: colors.yellow,
                    width: '65%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Text
                  style={[
                    CommonStyles.textColorBlack,
                    CommonStyles.fontMedium,
                    CommonStyles.textSizeMedium,
                    {padding: 5},
                  ]}>
                  REGISTER
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}
                style={[
                  CommonStyles.padding,
                  {
                    backgroundColor: colors.white,
                    width: '35%',
                    justifyContent: 'center',
                    alignItems: 'center',
                  },
                ]}>
                <Text
                  style={[
                    CommonStyles.fontMedium,
                    CommonStyles.textSizeMedium,
                    {padding: 5, color: '#297dec'},
                  ]}>
                  SIGN IN
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    );
  }
}
