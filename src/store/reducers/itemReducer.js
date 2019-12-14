import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  SORT_ITEMS_START,
  SORT_ITEMS_SUCCESS,
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
      
    case SORT_ITEMS_START:
      return {
        ...state,
        isLoading: true
      }

    case SORT_ITEMS_SUCCESS:
      console.log('sort payload', action.payload)
      const param = action.payload
      let sortedItems = []
      if (param === 'id' || param === 'created_at') {
        sortedItems = state.items.sort((a,b) => {
          return a['id'] - b['id']
        })
      } else if (param === 'created_atZ') {
        sortedItems = state.items.sort((a,b) => {
          return b['id'] - a['id']
        })
      } else if (param === 'nameZ') {
        sortedItems = state.items.sort((a,b) => {
          if (a['name'].toLowerCase() < b['name'].toLowerCase()) return 1
          else if (a['name'].toLowerCase() > b['name'].toLowerCase()) return -1
          return 0
        })
      } else {
        sortedItems = state.items.sort((a,b) => {
          if (a[param].toLowerCase() < b[param].toLowerCase()) return -1
          else if (a[param].toLowerCase() > b[param].toLowerCase()) return 1
          return 0
        }) 
      }
      
      return {
        ...state,
        items: sortedItems,
        isLoading: false
      }

    case ADD_ITEM:
      const today = new Date()
      const formatted = `${today.getMonth() + 1}-${today.getDate()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
      let ids = state.items.map(item => {
        return item.id
      })
      console.log(state.items)
      let idValue
      if (ids.length === 0) idValue = 1
        else if (ids.length === 1) idValue = 2
        else {
          ids.reduce((a,b) => {
          return idValue = Math.max(a,b) + 1 
        }) 
      }
      console.log('idValue', idValue)
      return {
        ...state,
        items: [...state.items, {
          id: idValue, 
          name: action.payload, 
          selected: false, 
          created_at: formatted
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