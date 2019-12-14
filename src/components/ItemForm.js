import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/actions';
import { Form, Input } from 'semantic-ui-react'

const ItemForm = (props) => {
  
  const [item, setItem] = useState('')
  
  const handleChange = (event) => {
    setItem(event.target.value)
  }

  const handleSubmit = () => {
    props.addItem(item)
    setItem('')
  }

  return (
		<div>
      <Form onSubmit={handleSubmit}>
        <Input 
          icon="plus"
          iconPosition="left"
          type="text" 
          name="item"
          value={item}
          placeholder="Add item..."
          onChange={handleChange}
        />
      </Form>
		</div>
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