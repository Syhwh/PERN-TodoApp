import React from 'react'
import { hot } from 'react-hot-loader/root'
import { TasksForm } from './components/TasksForm'

function App(): JSX.Element {
	return (
		<div>
			<h1>All right no way 2</h1>
			<TasksForm/>
		</div>
	)
}

export default hot(App)