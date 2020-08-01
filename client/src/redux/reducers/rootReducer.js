import {combineReducers} from 'redux';
import {authReducer} from './authReducer';
import {usersReducer} from './usersReducer';
import {messagesReducer} from './messagesReducer';

/**
 *  Корневой редюсер объединяет все обраьотчики
 *
 */
export const rootReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  auth: authReducer,
})