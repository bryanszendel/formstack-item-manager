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
      return {
        ...state,
        
      };

    case DELETE_ITEM:
      return {
        ...state,
    
      };
    default:
      return state;
  }
}