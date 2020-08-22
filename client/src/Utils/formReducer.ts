export interface FormState {
	title: string,
	description: string
}

export interface Action {
	type: string,
	payload: string
}

export const formReducer = (state: FormState, action: Action): FormState => {
	switch (action.type) {
		case 'title':
			return {
				...state,
				title: action.payload
			}
		case 'description':
			return {
				...state,
				description: action.payload
			}
		case 'submit':
			return {
				title: action.payload,
				description: action.payload
			}
		default:
			return state
	}
}