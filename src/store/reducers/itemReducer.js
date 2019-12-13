import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  ADD_ITEM_START,
  ADD_ITEM_SUCCESS,
  ADD_ITEM_FAILURE,
  DELETE_ITEM_START,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE
} from '../actions/actionTypes';

const initialState = {

}

export const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ITEMS_START:
      return {
        ...state,

      };
    case GET_ITEMS_SUCCESS:
      return {
        ...state,
        
      };
    case GET_ITEMS_FAILURE:
      return {
        ...state,
        
      }
  }
}