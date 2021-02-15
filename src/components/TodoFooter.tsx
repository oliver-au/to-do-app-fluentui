import React from 'react'
import { DefaultButton, Stack, Text } from '@fluentui/react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTodoAsyncAction } from '../store/todos/actions'
import { todoSelector } from '../store/todos/selector'

const TodoFooter = () => {
	const dispatch = useDispatch()
	const todoState = useSelector(todoSelector)
	const todos = todoState.todos
	const todoCount = todos.filter((todo) => todo.completed !== true).length

	const handleClear = () => {
		dispatch(clearTodoAsyncAction())
	}

	return (
		<Stack horizontal horizontalAlign="space-between" verticalAlign="center">
			<Text>
				{todoCount} item{todoCount > 1 ? 's' : ''} left
			</Text>
			<DefaultButton onClick={handleClear}>Clear Completed</DefaultButton>
		</Stack>
	)
}

export default TodoFooter