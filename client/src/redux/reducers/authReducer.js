import {AUTH_REQUEST} from '../types';

const initialState = {
  isAuth: false,
  userData: {
  }
}
/**
 *
 * Редюсер для первичной авторизации
 */

export const authReducer = (state= initialState, action) => {

  switch (action.type) {
    case AUTH_REQUEST:
      return {
        ...state,
        isAuth: action.payload.result,
        userData: {
          ...action.payload.data
        }
      }

    default: return state
  }
}