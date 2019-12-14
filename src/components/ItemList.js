import React from 'react';
import { List, Button, Icon } from 'semantic-ui-react'

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
							onClick={() => props.setSelected(item.id)}
							className={`${!item.selected ? 'items' : 'items-selected'}`}
							verticalAlign="middle"
							style={{position: 'relative'}}
						>
							<List.Content style={{height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
								<List.Header verticalAlign={'middle'} style={{ fontSize: 20, paddingRight: 10}}>{item.name}</List.Header>
								{item.selected ? <div style={{position: 'absolute', right: '5px', top: '5px', bottom: '5px'}}>
									<Button 
										onClick={() => props.deleteItem(item.id)}
										icon="delete"
										// color="black"
										circular={true}
									></Button>
								</div> : null}
								{item.created_at ? 
								<List.Description >
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