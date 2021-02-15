import { GET_TODOS_ASYNC, GET_TODOS, ADD_TODO_ASYNC, ADD_TODO, CLEAR_ASYNC, CLEAR, SET_FILTER, TOGGLE_COMPLETE_ASYNC, TOGGLE_COMPLETE, REMOVE_ASYNC, REMOVE, TodosActionTypes } from '../todos/types'
import { ILoadingState, loadingInitialState } from './state'

const reducer = (state = loadingInitialState, action: TodosActionTypes): ILoadingState => {
	switch(action.type) {
		case GET_TODOS_ASYNC:
			return {
				loading: true
			}
		case GET_TODOS:
			return {
				loading: false
			}
		case ADD_TODO_ASYNC:
			return {
				loading: true
			}
		case ADD_TODO:
			return {
				loading: false
			}
		case TOGGLE_COMPLETE_ASYNC:
			return {
				loading: true
			}
		case TOGGLE_COMPLETE:
			return {
				loading: false
			}
		case REMOVE_ASYNC:
			return {
				loading: true
			}	
		case REMOVE:
			return {
				loading: false
			}
		case CLEAR_ASYNC:
			return {
				loading: true
			}			
		case CLEAR:
			return {
				loading: false
			}
		default:
			return state		
	}
}

export default reducer