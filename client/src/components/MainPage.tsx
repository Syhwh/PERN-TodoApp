import React, { useReducer, useEffect, useState, useCallback } from 'react'
import { Container, Row } from 'react-bootstrap'

import { TasksForm } from './TasksForm'
import { Tasks } from './Tasks'
import { useFetch } from '../hooks/useFetch'

import { stateReducer, Items, task } from '../Utils/stateReducer'



const initialTaskState: Items[] = []
export const MainPage = (): JSX.Element => {
	const [tasks, dispatch] = useReducer(stateReducer, initialTaskState)
	const [editMode, setEditMode] = useState(false)
	const [editTaskState, setEditTaskState] = useState({
		todo_id: 0,
		title: undefined,
		description: undefined
	})
	const { createTask, getTasks, deleteTask, getOneTask, editTask } = useFetch()

	const handleDeleteTask = useCallback(
		async (id: number) => {
			console.log('Delete', id)
			await deleteTask(id)
			dispatch({
				type: 'deleteTask',
				payload: id
			})
		},
		[],
	)
	const handleEditTask = useCallback(
		(id: number) => {
			console.log(id)
			getOneTask(id)
				.then(({ data }) => setEditTaskState(
					data[0]
				))
			setEditMode(true)
		}, []
	)
	const handleGetTasks = () => {
		getTasks()
			.then(response => {
				dispatch({
					type: 'init',
					payload: response.data
				})
				console.log('response from get', response.data)
			})
	}



	const handleOnSubmit = async (e: React.FormEvent<EventTarget>, state: task, edit: boolean) => {
		e.preventDefault()
		if (edit) {
			await editTask(editTaskState.todo_id, state)
			dispatch({
				type: 'editTask',
				payload: {
					todo_id: editTaskState.todo_id,
					title: state.title,
					description: state.description
				}
			})
			setEditMode(false)
			setEditTaskState({
				todo_id: 0,
				title: undefined,
				description: undefined
			})
		} else {
			await createTask(state)
			dispatch({
				type: 'createTask',
				payload: {
					todo_id: Math.random(),
					title: state.title,
					description: state.description
				}
			})
		}
	}
	useEffect(() => {
		console.log('rendering')
		handleGetTasks()
	}, [handleEditTask, handleDeleteTask])



	return (<>
		<Container>
			<Row>
				<h1>Task App</h1>
			</Row>
			<Row>
				<TasksForm
					handleOnSubmit={handleOnSubmit}
					titleEdit={editTaskState.title}
					descriptionEdit={editTaskState.description}
					edit={editMode}
				/>
			</Row>
			<Row>
				<Tasks
					tasks={tasks}
					deleteTask={handleDeleteTask}
					editTask={handleEditTask}

				/>
			</Row>
		</Container>
	</>
	)
}
