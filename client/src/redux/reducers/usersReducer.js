import {ADD_NEW_USER, INIT_USER_INFO, SUCCESS_REQUEST, REMOVE_USER} from '../types';

const initialState = {
  users: []
}
/**
 * Редюсер обработчкий событий пользователей
 */
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_REQUEST:
      return  state;
    case INIT_USER_INFO:
      return {
        ...state,
        ...action.payload
      };
    case ADD_NEW_USER:
      return {
        ...state,
        users: state.users.concat(action.payload.state)
      };
    case REMOVE_USER:
      return {
        ...state,
        users: action.payload.users
      };

    default: return state
  }
}