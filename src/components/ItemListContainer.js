import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem, setSelected } from '../store/actions';
import { Container } from 'semantic-ui-react';
import ItemList from './ItemList'
import ItemForm from './ItemForm';

const ItemListContainer = (props) => {
	const {items, isLoading, getItems, deleteItem, setSelected} = props

	useEffect(() => {
		getItems()
		console.log('useEffect')
	}, [isLoading])

	return (
		<Container className="item-container">
			<ItemForm />
			<ItemList 
				items={items} 
				deleteItem={deleteItem} 
				setSelected={setSelected}
			/>
		</Container>
	)
}

const mapStateToProps = state => {
	const { items, isLoading } = state.itemReducer
	return {
		items: items,
		isLoading: isLoading
	}
}

export default connect(
	mapStateToProps,
	{
		getItems,
		deleteItem,
		setSelected
	})(ItemListContainer);