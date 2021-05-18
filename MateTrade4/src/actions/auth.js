import { HTTP } from './../utils/HTTP';

import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    ME_SUCCESS,
    ME_FAIL,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    LOGOUT_SUCCESS,
    SHOW_LOADER,
    HIDE_LOADER,
    LOGOUT_FAIL
} from '../constants/ActionTypes';


export function loginRequest(data) {
    return function (dispatch) {
        return new Promise(function (resolve, reject) {
            {

                dispatch({ type: SHOW_LOADER });
                // API
                HTTP('post', '/login', data)
                    .then(function (response) {
                        console.log("response: ", response.data.data); 
                        dispatch({
                            type: LOGIN_SUCCESS,
                            data: response.data.data
                        })
                        resolve(response.data);
                    })
                    .catch(error => {
                        console.log("error: ", error);
                        reject(error.response);
                        dispatch({
                            type: LOGIN_FAIL,
                        })
                    })
                    .finally(() => {
                        dispatch({ type: HIDE_LOADER })
                    })
            }
        })
    }
}

