import {Icon} from 'native-base';
import React, {Component} from 'react';
import {StatusBar, View, Text, ImageBackground} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import CommonStyles from '../commonStyles';
import images from '../constants/images';
export default class Quotes extends Component {
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
              Quotes
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
        <View style={[CommonStyles.container, {backgroundColor: "#ebf2f9"}]}>
        <LinearGradient style={{flex: 1}} colors={['#C9D7EA', '#ebf2f9']}>
            <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
              <Icon
                type='AntDesign'
                name="arrowsalt"
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
