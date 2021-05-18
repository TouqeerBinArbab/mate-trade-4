
/* Actions */
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  ME_SUCCESS,
  ME_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SAVE_PROFILE,
  SAVE_PROFILE_FAIL,
} from '../constants/ActionTypes.js';
import { AsyncStorage } from "react-native";
import initialState from '../store/initialState';

const auth_reducer = (state = initialState.auth, action) => {
  switch (action.type) {


      case LOGIN_SUCCESS:
          console.log(LOGIN_SUCCESS);
          console.log('action.data.access_token', action.data.access_token)
          AsyncStorage.setItem('auth_token', action.data.access_token);
          return Object.assign(
              {},
              state,
              {
                  user: action.data,
                  token: action.data.access_token
              }
          );

      case LOGIN_FAIL:
          console.log(LOGIN_FAIL);
          return state;



      case SIGNUP_SUCCESS:
          console.log(SIGNUP_SUCCESS);
          console.log('action.data.access_token', action.data.access_token)
          AsyncStorage.setItem('auth_token', action.data.access_token);
          return Object.assign(
              {},
              state,
              {
                  user: action.data,
                  token: action.data.access_token
              }
          );



      case SAVE_PROFILE:
          return Object.assign(
              {},
              state,
              {
                  user: action.data
              }
          );

      case SAVE_PROFILE_FAIL:
          return state;

      case ME_SUCCESS:
          console.log(ME_SUCCESS);
          return Object.assign(
              {},
              state,
              {
                  user: action.data,
                  token: action.data.access_token
              }
          );


      case ME_FAIL:
          console.log(ME_FAIL);
          return state;


      case SIGNUP_FAIL:
          console.log(SIGNUP_FAIL);
          return state;


      case LOGOUT_SUCCESS:
          console.log(LOGOUT_SUCCESS);
        //  AsyncStorage.removeItem('auth_token');
          return Object.assign(
              {},
              state,
              {
                  user: action.data,
                  token: action.data.access_token
              }
          );
      default:
          return state;
  }
};

export default auth_reducer;
