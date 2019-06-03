import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS
} from './types';

// check token and load user

export const loadUser = () => (dispatch, getState) => {
    // User Loading
    dispatch({ type: USER_LOADING });
  

    const token = getState().auth.token;
    //headers
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    //if token add to header
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    axios
      //.get("/api/auth/user", tokenConfig(getState))
      .get("/api/auth/user", config)
      .then(res => {
        dispatch({
          type: USER_LOADED,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({
          type: AUTH_ERROR
        });
      });
};

//Login user
export const login = (username, password) => (dispatch) => {

  //headers
  const config = {
      headers: {
          "Content-Type": "application/json"
      }
  }

  //Request Body
  const body = JSON.stringify({ username, password })

  axios
    .post("/api/auth/login", body, config)
    .then(res => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOGIN_FAIL
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  axios
    .post("/api/auth/logout/", null, tokenConfig(getState))
    .then(res => {
      dispatch({ type: 'CLEAR' });
      dispatch({
        type: LOGOUT_SUCCESS
      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
    });
};