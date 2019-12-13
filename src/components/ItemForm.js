import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/actions';


const ItemForm = (props) => {
	return (
		<div>
			{props.items.map(item => {
				return <p>{item.name}</p>
			})}
		</div>
	)
}

const mapStateToProps = state => {

}

export default connect(
  mapStateToProps,
  {
    addItem
  })(ItemForm);