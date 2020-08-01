import {ADD_NEW_MESSAGE, ADD_NEW_USER, AUTH_REQUEST, INIT_USER_INFO, SUCCESS_REQUEST} from './types';
import axios from 'axios';
import {socket} from '../App';

/**
 *
 * @param data
 * @returns {{type: string}}
 */
export function auth(data) {
  return {
    type: SUCCESS_REQUEST
  }
}

/**
 *
 * @param data
 * @returns {function(...[*]=)}
 */
export function authRequest(data) {
  return async dispatch => {
    try {
      const response = await axios.post('http://localhost:5000/login/',data)
      dispatch({type:AUTH_REQUEST, payload: {result: response.data.result, data: {name: data.name, id: data.id} }})
      if(data) {
        socket.Connect(data.name, data.id)
        dispatch(auth())
      }
    } catch (e) {
      console.log('authRequest error', e)
    }
  }
}

/**
 *
 * @param state
 * @returns {{payload, type: string}}
 */
export const initUserInfo = state => (
  {
    type: INIT_USER_INFO,
    payload: {
      ...state
    }
  });
/**
 *
 * @param state
 * @returns {{payload: {state: *}, type: string}}
 */
export const addNewUser = state => (
  {
    type: ADD_NEW_USER,
    payload: {
      state
    }
  });
/**
 *
 * @param state
 * @returns {{payload, type: string}}
 */
export const addNewMessage = state => (
  {
    type: ADD_NEW_MESSAGE,
    payload: {
      ...state
    }
  });




