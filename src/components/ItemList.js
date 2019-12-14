import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react'

const ItemList = (props) => {
	return (
		<List verticalAlign="middle">
			{props.items ? props.items.map(item => {
				return (
					<List.Item
						key={item.id}
						className={`${!item.selected ? 'item' : 'item-selected'}`}
					>
						<List.Content style={{ fontSize: 20 }}>{item.name}</List.Content>
						<List.Content>
							<Button 
								onClick={() => props.deleteItem(item.id)}
								icon="delete"
								color="red"
								circular={true}
								// size="large" 
							/>
						</List.Content>
					</List.Item>
				)
			}) : null}
		</List>
	)
}

export default ItemList;