import React from 'react';
import { List, Button } from 'semantic-ui-react'

const ItemList = (props) => {
	return (
		<List celled verticalAlign="middle">
			{props.items ? props.items.map(item => {
				return (
					// <div 
					// 	onClick={() => props.setSelected(item.id)} 
					// 	key={item.id} 
					// 	className={`${!item.selected ? 'items' : 'items-selected'}`}
					// >
						<List.Item
							key={item.id}
							onClick={() => props.setSelected(item.id)}
							className={`${!item.selected ? 'items' : 'items-selected'}`}
							style={{position: 'relative', minHeight: 60}}
						>
							<List.Content style={{height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
								<List.Header style={{ fontSize: 20, paddingRight: 10}}>{item.name}</List.Header>
								{item.selected ? <div style={{position: 'absolute', right: '5px', top: '5px', bottom: '5px'}}>
									<Button 
										onClick={() => props.deleteItem(item.id)}
										icon="delete"
										// color="black"
										circular={true}
										data-testid="delete-icon"
									></Button>
								</div> : null}
								{item.created_at ? 
								<List.Description style={{marginRight: 30}} >
									created: {item.created_at}
								</List.Description> : null}
							</List.Content>
						</List.Item>
					// </div>
				)
			}) : null}
		</List>
	)
}

export default ItemList;