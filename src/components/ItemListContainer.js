import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem } from '../store/actions';
import ItemList from './ItemList'
import ItemForm from './ItemForm';

const ItemListContainer = (props) => {

	useEffect(() => {
		props.getItems()
	}, [props.isLoading])

	return (
		<div style={{width: '50%'}}>
			<ItemForm />
			<ItemList items={props.items} deleteItem={props.deleteItem} />
		</div>
	)
}

const mapStateToProps = state => {
	return {
		items: state.itemReducer.items,
		isLoading: state.itemReducer.isLoading
	}
}

export default connect(
	mapStateToProps,
	{
		getItems,
		deleteItem
	})(ItemListContainer);