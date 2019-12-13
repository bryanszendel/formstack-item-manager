import React from 'react';

const ItemList = (props) => {
	return (
		<div>
			{props.items.map(item => {
				return <p>{item.name}</p>
			})}
		</div>
	)
}

export default ItemList;