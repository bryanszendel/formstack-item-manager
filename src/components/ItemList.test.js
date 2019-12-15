import React from 'react'
import { Provider } from 'react-redux';
import store from '../store/store'
import { render, fireEvent } from '@testing-library/react';
import App from '../App'
import ItemList from './ItemList';

describe('<ItemList />', () => {
  it('Should return expected data', () => {
    const { getByText } = render(<Provider store={store}><App><ItemList /></App></Provider>);
    const el = getByText('Setup React app using create-react-app');
    const el2 = getByText('Add some styles using SemanticUI React');
    expect(el).toBeInTheDocument()
    expect(el2).toBeInTheDocument()
  })
  it('Should return 6 initial items', () => {
    const { queryAllByRole } = render(<Provider store={store}><App><ItemList /></App></Provider>);
    const items = queryAllByRole('listitem')
    expect(items.length).toEqual(6)
  })
  it('delete icon should be present after click', () => {
    const { getByTestId, queryAllByRole } = render(<Provider store={store}><App><ItemList /></App></Provider>);
    fireEvent.click(queryAllByRole('listitem')[0])
    const deleteIcon = getByTestId('delete-icon')
    expect(deleteIcon).toBeInTheDocument()
    fireEvent.click(queryAllByRole('listitem')[0])
    expect(deleteIcon).not.toBeInTheDocument()
  })
})