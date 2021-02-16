import React from 'react'
import { render, screen, cleanup } from '@testing-library/react';
import App from '../App'
import TodoApp from '../components/TodoApp'
import Loading from '../components/Loading'
import { initializeIcons } from '@fluentui/react';
import { renderWithProviders } from '../test/client-test-utils'

initializeIcons();

// jest.mock('../store/todos/actions.ts', () => ({
// 	getTodosAsyncAction: jest.fn()
// }));

const initialTodos = [{
	id: 'fsfjalk',
	label: 'stru',
	completed: false
}]

jest.mock('../store/todos/api.ts', () => {
	return {
		getTodos: () => {
			return new Promise((resolve) => {
				resolve(initialTodos)
			})
		}
	}
})


test('test get todos ', async () => {
	const { finishLoading } = renderWithProviders(
		<>
			<TodoApp />
			<Loading />
		</>
	) 
	await finishLoading()
	const inputNode = screen.getByText(initialTodos[0].label)
	expect(inputNode.innerHTML).toBe(initialTodos[0].label)
})
 

afterEach(cleanup)