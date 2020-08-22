import React from 'react'
import { Container } from 'react-bootstrap'
import { TasksForm } from './TasksForm'

export const MainPage = () => {
	return (
			<Container>
			<h1>Task App</h1>
				<TasksForm/>
			</Container>

	)
}
