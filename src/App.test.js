import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}><App /></Provider>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  it('renders placeholder text', () => {
    const { getByPlaceholderText } = render(<Provider store={store}><App /></Provider>);
    const el = getByPlaceholderText('Add item...');
    expect(el).toBeInTheDocument();
  })
  it('renders -Sort- dropdown text', () => {
    const { getByText } = render(<Provider store={store}><App /></Provider>);
    const el = getByText('-Sort-');
    expect(el).toBeInTheDocument()
  })
})