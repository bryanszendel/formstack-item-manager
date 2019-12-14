import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  ADD_ITEM,
  DELETE_ITEM,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  isLoading: false,
  error: ''
}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        items: action.payload,
        error: ''
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case ADD_ITEM:
      let ids = state.items[0] ? state.items.map(item => {
        return item.id
      }) : [1]
      let idValue = ids.reduce((a,b) => {
        return Math.max(a,b) + 1 
      })
      return {
        ...state,
        items: [...state.items, {
          id: idValue, name: action.payload
        }],
      };

    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
}