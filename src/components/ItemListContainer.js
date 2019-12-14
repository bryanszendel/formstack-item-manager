import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems, deleteItem, setSelected } from '../store/actions';
import { Container } from 'semantic-ui-react';
import ItemList from './ItemList'
import ItemForm from './ItemForm';

const ItemListContainer = (props) => {

	useEffect(() => {
		props.getItems()
	}, [props.isLoading])

	return (
		<Container className="item-container">
			<ItemForm />
			<ItemList 
				items={props.items} 
				deleteItem={props.deleteItem} 
				setSelected={props.setSelected}
			/>
		</Container>
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
		deleteItem,
		setSelected
	})(ItemListContainer);