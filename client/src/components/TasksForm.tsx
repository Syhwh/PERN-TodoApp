import React from 'react'

export const TasksForm = () => {
	return (
		<div>
			<form >
				<label htmlFor="title">Task title</label>
				<input type="title" name="" id=""/>
				<label htmlFor="description">Task description</label>
				<textarea name="description" id="" cols="30" rows="10"></textarea>
			</form>
		</div>
	)
}
