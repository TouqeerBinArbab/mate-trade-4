import {Icon} from 'native-base';
import React, {Component} from 'react';
import {StatusBar, View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CommonStyles from '../commonStyles';
import images from '../constants/images';

export default class Indicator extends Component {
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
        <LinearGradient style={{flex: 1}} colors={['#C9D7EA', '#ebf2f9']}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Icon
                name="bar-graph" type='Entypo'
                style={[
                  {paddingVertical: 10, fontSize: 70},
                  CommonStyles.margin,
                  CommonStyles.textColorBlack,
                ]}
               
              />
            </View>
        </LinearGradient>
        </View>
      </View>
    );
  }
}
