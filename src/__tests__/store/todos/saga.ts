import { testSaga, expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers'
import { getTodosAsync, addTodosAsync, removeAsync } from '../../../store/todos/saga'
import { GET_TODOS, ADD_TODO, ADD_TODO_ASYNC, REMOVE, REMOVE_ASYNC,  IAddTodoAsyncAction, IRemoveAsyncAction } from '../../../store/todos/types'
import todosApi from '../../../store/todos/api'
import { v4 as uuid } from 'uuid';
import reducer from '../../../store/todos/reducer'

const initialTodos = [{
	id: '001',
	label: 'Study AWS',
	completed: false
}]

jest.mock('../../../store/todos/api.ts', () => {
	return {
		getTodos: () => {
			console.log(1)
			return new Promise((resolve) => {
				resolve(initialTodos)
			})
		},
		addTodo: (): Promise<void> => {
			return new Promise((resolve) => {
				resolve()
			})
		}
	}
})

jest.mock('uuid', () => {
	return {
		v4: () => '002'
	}
})

// Unit Test

test('test getTodosAsync', () => {
	testSaga(getTodosAsync)
		.next()
		.call(todosApi.getTodos)
		.next(initialTodos)
		.put({
			type: GET_TODOS,
			todos: initialTodos
		})
		.next()
		.isDone()
})

test('test addTodosAsync', () => {
	const addTodoAsyncAction: IAddTodoAsyncAction = {
		type: ADD_TODO_ASYNC,
		label: 'Study AWS'
	}

	const todo = {
		label: addTodoAsyncAction.label,
		id: uuid(),
		completed: false
	}

	testSaga(addTodosAsync, addTodoAsyncAction)
		.next()
		.call(todosApi.addTodo, todo)
		.next()
		.put({
			type: ADD_TODO,
			todo
		})
		.next()
		.isDone()	
})

// Integration Test

test('Get Todos Integration Test', () => {
	return expectSaga(getTodosAsync)
		.withReducer(reducer)
		.provide([
			[matchers.call.fn(todosApi.getTodos), initialTodos]
		])

		.hasFinalState({
			todos: [...initialTodos],
			filter: 'all'
		})

		.run()

})

test ('Add Todos Integration Test', () => {
	const addTodoAsyncAction: IAddTodoAsyncAction = {
		type: ADD_TODO_ASYNC,
		label: 'Study AWS'
	}

	return expectSaga(addTodosAsync, addTodoAsyncAction)
		.withReducer(reducer)
		
		.hasFinalState({
			todos: [{
				label: addTodoAsyncAction.label,
				id: uuid(),
				completed: false
			}],
			filter: 'all'
		})

		.run()
})


