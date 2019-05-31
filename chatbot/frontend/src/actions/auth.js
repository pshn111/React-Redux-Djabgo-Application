import axios from 'axios';
import { returnErrors } from './messages';

import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
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