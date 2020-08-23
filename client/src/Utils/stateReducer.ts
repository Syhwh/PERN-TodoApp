
export interface Items {
	todo_id: number
	title: string
	description: string
}

export interface task {
	todo_id: number
	title: string
	description: string
}

export interface Actions {
	type: string,
	payload: string | number | task
}


export const stateReducer = (state: Items[], action: Actions): any => {
	console.log('Action')
	console.log(action)
	switch (action.type) {
		case 'createTask':
			return [...state, action.payload]
		case 'editTask':
			const editData = state.map(((task) => {
				if (task.todo_id === action.payload.todo_id) {
					return {
						todo_id: action.payload.todo_id,
						title: action.payload.title,
						description: action.payload.description
					}
				} else {
					return task
				}
			}))
			return editData
		case 'deleteTask':
			const data = state.filter((task => task.todo_id != action.payload))
			return data
		case 'init':
			return action.payload
		default:
			return state
	}
}