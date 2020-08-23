import React, { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import { Items } from '../Utils/stateReducer'



interface Props {
	tasks: Items[]
	deleteTask: any
	editTask: any
}

export const Tasks: React.FC<Props> = ({ tasks, deleteTask, editTask }) => {

	if (!tasks) return <h1>loading...</h1>
	return (<>
		{tasks.map(({ todo_id, title, description }) => {
			return (<Card
				bg={'light'}
				key={todo_id}
				style={{ width: '18rem' }}
				className="mb-2"
			>
				<Card.Header>{title}</Card.Header>
				<Card.Body>
					<Card.Text>
						{description}
					</Card.Text>
				</Card.Body>
				<Card.Footer style={{
					display: 'flex',
					justifyContent: 'space-between'
				}}>
					<Button variant="warning" onClick={() => editTask(todo_id)} >Edit</Button>
					<Button variant="danger" onClick={() => deleteTask(todo_id)} >Delete</Button>
				</Card.Footer>
			</Card>
			)
		})
		}
	</>)
}
