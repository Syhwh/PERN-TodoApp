import React, { useReducer } from 'react'
import { Form, Button } from 'react-bootstrap'
import { formReducer, FormState } from '../Utils/formReducer'

const initialState: FormState = {
	title: '',
	description: ''
}

export const TasksForm = () => {
	const [state, dispatch] = useReducer(formReducer, initialState)
	const { title, description } = state

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({
			type: e.currentTarget.name,
			payload: e.currentTarget.value
		})
	}

	const handleOnSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault()
		dispatch({
			type: 'submit',
			payload: ''
		})
	}

	return (
		<div>
			<Form onSubmit={handleOnSubmit}>
				<Form.Group>
					<Form.Label>Task Title</Form.Label>
					<Form.Control
						type='text'
						placeholder='Title'
						value={title}
						onChange={handleOnChange}
						name='title'
					/>
				</Form.Group>
				<Form.Group >
					<Form.Label>Task Description</Form.Label>
					<Form.Control
						as='textarea'
						rows={3} placeholder='I have to do...'
						name='description'
						onChange={handleOnChange}
						value={description}
					/>
				</Form.Group>
				<Button
					variant='primary'
					type='submit'
					name='submit'
				>
					Submit
				</Button>
			</Form>

		</div>
	)
}
