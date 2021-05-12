import { StyleSheet } from 'react-native';

const CommonStyles = StyleSheet.create({
  appRedColor: {
    color: '#FF0000',
  },
  container: {
    flex: 1,
  },

  zIndex:{
    zIndex: 1
  }, 
  paddingHorizontal2: {
    paddingHorizontal: 2
  },
  bgColor: {
    backgroundColor: 'red',
  },
  blackColor: {
    backgroundColor: '#000',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topBarHeight: {
    // height: 60,
  },

  linearGradientBottomToTop1: {
    position: 'absolute',
    top: '31.25%',
    width: '100%',
    bottom: 0,
    left: 0,
    flex: 1,
    opacity: 0.7,
  },

  // linearGradient: {
  //   position: 'absolute',
  //   top: '31.25%',
  //   width: '100%',
  //   bottom: 0,
  //   left: 0,
  //   flex: 1,
  //   opacity: 0.7,
  // },
  fitToParent: {
    height: '100%',
    width: '100%',
  },
  bottomContainer: {
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',

  },
  grayFont: {
    color: 'gray',
  },
  fitToDevice: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  crossIcon: {
    position: 'absolute',
    top: 12,
    right: 12,
    opacity: 0.8,
  },
  leftCrossIcon: {
    height: 20,
    width: 20,
    opacity: 0.5,
    marginLeft: 3,
    marginRight: 3,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  linearGradient: {
    position: 'absolute',
    top: '31.25%',
    width: '100%',
    bottom: 0,
    left: 0,
    flex: 1,
    opacity: 0.7,
  },
  linearGradientBottomToTop: {
    position: 'absolute',
    width: '100%',
    height: 62,
    top: 0,
    left: 0,
    right: 0,
    flex: 1,
    opacity: 0.7,
  },
  centerText: {
    textAlign: 'center',
  },
  centerElement: {
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  linearGradientBottomToTopSplash: {
    position: 'absolute',
    top: '31.25%',
    width: '100%',
    bottom: 0,
    left: 0,
    flex: 1,
    opacity: 0.7,
  },

  buttonCenterText: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  profileImageSmall: {
    height: 34,
    width: 34,
    borderRadius: 17,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },
  profileImageMedium: {
    height: 50,
    width: 50,
    borderRadius: 25,
    resizeMode: 'cover',
    backgroundColor: '#e5e5e5',
  },

  profileImageLarge: {
    height: 70,
    width: 70,
    borderRadius: 35,
    resizeMode: 'cover',
  },
  profileImageExtraLarge: {
    height: 90,
    width: 90,
    borderRadius: 45,
    resizeMode: 'cover',
  },
  profileIcon: {
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignSelf: 'center',
    resizeMode: 'contain',
  },

  profileImage1: {
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,

    resizeMode: 'center',
  },

  profileImage2: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 10,

    resizeMode: 'center',
  },
  margin: {
    margin: 10,
  },
  buttonStyle: {
    shadowOffset: { height: 0, width: 0 },
    shadowOpacity: 0,
    elevation: 0,
    borderRadius: 25,
  },
  textColorWhite: {
    color: 'white',
  },
  textColorBlack: {
    color: '#000',
  },
  textColorGray: {
    color: '#A9A9A9'
  },
  
  transparent: {
    color: 'transparent',
  },
  pb10: {
    paddingBottom: 10,
  },
  padding: {
    padding: 10,
  },
  paddingHorizontal: {
    paddingHorizontal: 10,
  },
  stretch: {
    resizeMode: 'stretch',
  },
  iconSize: {
    width: 20,
    height: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    // borderRadius: 10,
    paddingHorizontal: 20,
    // flex:1,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  ml10: {
    marginLeft: 20,
  },
  mll10: {
    marginLeft: 10,
  },
  mr10: {
    marginRight: 20,
  },
  mt10: {
    marginTop: 20,
  },
  m10: {
    marginTop: 20,
  },
  mtt10: {
    marginTop: 10,
  },
  textSizeLarge: {
    fontSize: 22,
  },
  textSizeIcon: {
    fontSize: 26,
  },
  textSizeNormal: {
    fontSize: 16,
  },

  activeView: {
    justifyContent: 'center',
    alignContent: 'center',
    borderBottomColor: 'red',
    borderBottomWidth: 3,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  inActiveView: {
    alignContent: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 3,
    marginHorizontal: 10,
    borderBottomColor: 'transparent',
  },

  active: {
    fontSize: 14,
    padding: 10,
    fontFamily: 'Roboto-Medium',
    color: 'red',
  },
  inActive: {
    color: '#000',
    fontSize: 14,
    padding: 10,
    fontFamily: 'Roboto-Medium',
  },
  textSizeAverage: {
    fontSize: 14,
  },
  textSizeMedium: {
    fontSize: 18,
  },
  textSizeBig: {
    fontSize: 20,
  },
  textSizeSmall: {
    fontSize: 12,
  },
  fontNormal: {
    fontFamily: 'Roboto-Black',
  },
  fontMedium: {
    fontFamily: 'Roboto-Medium',
  },
  fontRegular: {
    fontFamily: 'Roboto-Regular',
  },
  fontBold: {
    fontFamily: 'Roboto-Bold',
  },
});
export default CommonStyles;
