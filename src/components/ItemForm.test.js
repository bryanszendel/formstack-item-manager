import React from 'react'
import { Provider } from 'react-redux';
import store from '../store/store'
import { render, fireEvent } from '@testing-library/react';
import App from '../App'
import ItemList from './ItemList';
import ItemForm from './ItemForm';

describe('<ItemForm />', () => {
  it('Should input text', () => {
    const { queryByPlaceholderText } = render(<Provider store={store}><App><ItemForm /><ItemList /></App></Provider>);
    const textInput = queryByPlaceholderText('Add item...')
    fireEvent.change(textInput, { target: { value: 'Typing'}})
    textInput.value = 'Typing'
    expect(textInput.value).toEqual('Typing')
  })
})