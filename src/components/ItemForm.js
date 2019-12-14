import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem, sortItems } from '../store/actions';
import { Form, Input, Dropdown } from 'semantic-ui-react'

const ItemForm = (props) => {

  const [item, setItem] = useState('')
  const [itemPlaceholder, setItemPlaceholder] = useState('-Sort-')

  const handleChange = (event) => {
    setItem(event.target.value)
  }

  const handleSubmit = () => {
    props.addItem(item)
    setItem('')
  }

  const options = [
    { 
      key: 'none', 
      text: 'None', 
      value: 'none',
      onClick: () => {
        props.sortItems('id') 
        setItemPlaceholder('-Sort-')
      }
    },
    { 
      key: 'id', 
      text: 'ID', 
      value: 'id', 
      onClick: () => {
        props.sortItems('id') 
        setItemPlaceholder('ID')
      } 
    },
    { 
      key: 'created', 
      text: 'Created (earlier)', 
      value: 'created_at', 
      onClick: () => {
        props.sortItems('created_at')
        setItemPlaceholder('Created (earlier)')
      } 
    },
    { 
      key: 'createdZ', 
      text: 'Created (later)', 
      value: 'created_atZ', 
      onClick: () => {
        props.sortItems('created_atZ')
        setItemPlaceholder('Created (later)')
      }
    },
    { 
      key: 'name', 
      text: 'Name (a-z)', 
      value: 'name', 
      onClick: () => {
        props.sortItems('name')
        setItemPlaceholder('Name (a-z)')
      } 
    },
    { 
      key: 'nameZ', 
      text: 'Name (z-a)', 
      value: 'nameZ', 
      onClick: () => {
        props.sortItems('nameZ')
        setItemPlaceholder('Name (z-a)')
      } 
    },
  ]

  return (
    <Form
      // fluid
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
          <Dropdown 
            style={{ width: 170 }} 
            button 
            basic 
            options={options} 
            placeholder={itemPlaceholder} 
          />
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
    addItem,
    sortItems
  })(ItemForm);