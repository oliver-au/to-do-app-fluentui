import reducer from '../../../store/todos/reducer'
import { GET_TODOS, ADD_TODO, ADD_TODO_ASYNC, REMOVE, REMOVE_ASYNC,  TodosActionTypes } from '../../../store/todos/types'
import { todoInitialState, ITodosState } from '../../../store/todos/state'

test('unit test get todos reducer', () => {

	const initialTodos = [{
		id: '001',
		label: 'Study AWS',
		completed: false
	}]

	const getTodsAction: TodosActionTypes = {
		type: GET_TODOS,
		todos: [...initialTodos]
	}

	const state: ITodosState = reducer(todoInitialState, getTodsAction)

	expect(state).toEqual({
		todos: [...initialTodos],
		filter: 'all'
	})

})

test('unit test add todos reducer', () => {
	const todo = {
			id: '001',
			label: 'Study Redux',
			completed: false
		}
	const addTodoAction: TodosActionTypes = {
		type: ADD_TODO,
		todo
	}

	const state: ITodosState = reducer(todoInitialState, addTodoAction)

	expect(state).toEqual({
		todos: [todo],
		filter: 'all'
	})


})