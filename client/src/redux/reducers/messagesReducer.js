import {ADD_NEW_MESSAGE} from '../types';

const initialState = {
  messages: []
}

/**
 *
 * Редюсер для обработки событий сообщений
 */
export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_NEW_MESSAGE :
      return  {
        ...state,
        messages: [...state.messages, {...action.payload}]
      }

    default: return state
  }
}
