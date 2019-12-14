import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/actions';
import { Form, Input, Dropdown } from 'semantic-ui-react'

const ItemForm = (props) => {

  const [item, setItem] = useState('')

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  const handleSubmit = () => {
    props.addItem(item)
    setItem('')
  }

  const options = [
    { key: 'none', text: 'None', value: 'none' },
    { key: 'id', text: 'ID', value: 'id' },
    { key: 'created', text: 'Created', value: 'created' },
    { key: 'name', text: 'Name', value: 'name' },
  ]

  return (
    <Form
      fluid
      onSubmit={handleSubmit}
    >
      <Input
        fluid
        icon="plus"
        iconPosition="left"
        type="text"
        size="big"
        name="item"
        value={item}
        placeholder="Add item..."
        onChange={handleChange}
        action={
          <Dropdown style={{ width: 110 }} button basic options={options} placeholder='-Sort-' />
        }
      />
    </Form>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.itemReducer.isLoading
  }
}

export default connect(
  mapStateToProps,
  {
    addItem
  })(ItemForm);