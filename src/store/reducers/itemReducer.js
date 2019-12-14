import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  SET_SELECTED,
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

    case SET_SELECTED:
      return {
        ...state,
        items: state.items.map(item => {
          if (item.id === action.payload) {
            return {
              ...item,
              selected: !item.selected
            } 
          } else {
            return item
          }
        })
      }
      

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
          id: idValue, 
          name: action.payload, 
          selected: false, 
          created_at: Date.now()
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