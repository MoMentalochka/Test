import {ADD_NEW_MESSAGE, ADD_NEW_USER, AUTH_REQUEST, INIT_USER_INFO, SUCCESS_REQUEST, REMOVE_USER} from './types';
import axios from 'axios';
import {socket} from '../App';
import Notification from '../components/Alert/Notification';
/**
 *
 * @returns {{type: string}}
 */
export function auth() {
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

      if(data){
        dispatch({type:AUTH_REQUEST, payload: {result: response.data.result, data: {name: data.name, id: data.id} }})
        socket.Connect(data.name, data.id)
        dispatch(auth())
        Notification(response.data.message, 'Success')
      }

    } catch (e) {
      Notification(e.response.data.message, 'Error')
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

export const disconnect = users => (
  {
    type: REMOVE_USER,
    payload: {
      users
    }
  });




