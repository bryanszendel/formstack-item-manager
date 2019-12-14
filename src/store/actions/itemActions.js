import {
  GET_ITEMS_START,
  GET_ITEMS_SUCCESS,
  GET_ITEMS_FAILURE,
  ADD_ITEM,
  DELETE_ITEM
} from './actionTypes.js'
import data from '../../data/data'

// do things here with the items
export const getItems = () => {
  return dispatch => {
    dispatch({ type: GET_ITEMS_START });
    console.log('DATA', data)
    dispatch({ type: GET_ITEMS_SUCCESS, payload: data });
  }
}

export const addItem = (item) => {
  return dispatch => {
    dispatch({ type: ADD_ITEM, payload: item });
  }
}

export const deleteItem = (id) => {
  return dispatch => {
    dispatch({ type: DELETE_ITEM, payload: id})
  }
}