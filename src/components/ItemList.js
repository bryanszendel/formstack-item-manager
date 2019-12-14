import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react'

const ItemList = (props) => {
	return (
		<List verticalAlign="middle">
			{props.items ? props.items.map(item => {
				return (
					<div 
						onClick={() => props.setSelected(item.id)} 
						key={item.id} 
						className={`${!item.selected ? 'items' : 'items-selected'}`}>
						<List.Item
							style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
						>
							{item.selected ? <List.Content >
								<Button 
									onClick={() => props.deleteItem(item.id)}
									icon="delete"
									color="red"
									// style={{position: 'relative', left: '300px'}}
									circular={true}
									// size="large" 
								></Button>
							</List.Content> : null}
							<List.Content style={{ fontSize: 20 }}>{item.name}</List.Content>
						</List.Item>
					</div>
				)
			}) : null}
		</List>
	)
}

export default ItemList;