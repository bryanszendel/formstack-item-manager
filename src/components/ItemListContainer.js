import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../store/actions';
import ItemList from './ItemList'

const ItemListContainer = (props) => {

	useEffect(() => {
		props.getItems()
	}, [props.isLoading])

	return (
		<ItemList items={props.items}/>
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
	})(ItemListContainer);