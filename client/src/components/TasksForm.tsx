import React, { useReducer } from 'react'
import { Form, Button, Card } from 'react-bootstrap'
import { formReducer, FormState } from '../Utils/formReducer'

interface Props {
	handleOnSubmit: any
	titleEdit?: string
	descriptionEdit?: string
	edit?: boolean
}

const initialFormState: FormState = {
	title: '',
	description: ''
}

export const TasksForm: React.FC<Props> = ({
	handleOnSubmit,
	titleEdit,
	descriptionEdit,
	edit = false
}) => {
	const [state, dispatch] = useReducer(formReducer, initialFormState)
	const { title, description } = state
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		dispatch({
			type: e.currentTarget.name,
			payload: e.currentTarget.value
		})
	}
	const clearForm = () => {
		dispatch({
			type: 'submit',
			payload: ''
		})
	}
	return (
		<Card border="dark" style={{ width: '18rem' }}>
			<Card.Header>Enter a new task</Card.Header>
			<Card.Body>
				<Card.Text>
					<Form onSubmit={(e) => {
						handleOnSubmit(e, state, edit)
						clearForm()
					}}>
						<Form.Group>
							<Form.Label>Task Title</Form.Label>
							<Form.Control
								type='text'
								placeholder={titleEdit ? titleEdit : 'Title'}
								value={title}
								onChange={handleOnChange}
								name='title'
							/>
						</Form.Group>
						<Form.Group >
							<Form.Label>Task Description</Form.Label>
							<Form.Control
								as='textarea'
								rows={3} placeholder={descriptionEdit ? descriptionEdit : 'I have to do...'}
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
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
