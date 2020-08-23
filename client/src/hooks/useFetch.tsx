import React from 'react'
import { api } from '../Utils/api'
import { FormState } from '../Utils/formReducer'
import { AxiosResponse } from 'axios'

export const useFetch = () => {

	const getTasks = async (): Promise<AxiosResponse> => {
		try {
			const tasks = await api.get('/todos')
			return tasks
		} catch (error) {
			throw new Error(error)
		}
	}
	const getOneTask = async (id: number) => {
		try {
			const response = await api.get(`/todos/${id}`)
			return response
		} catch (error) {
			throw new Error(error)
		}
	}
	const createTask = async (data: FormState): Promise<AxiosResponse> => {
		try {
			const response = await api.post('/todos', data)
			return response
		} catch (error) {
			throw new Error(error)
		}
	}
	const deleteTask = async (id: number): Promise<AxiosResponse | void> => {
		try {
			await api.delete(`/todos/${id}`)
		} catch (error) {
			throw new Error(error)
		}
	}
	const editTask = async (id: number, data: FormState) => {
		try {
			await api.put(`/todos/${id}`, data)
		} catch (error) {
			throw new Error(error)
		}
	}
	return {
		getTasks,
		createTask,
		deleteTask,
		editTask,
		getOneTask
	}

}
