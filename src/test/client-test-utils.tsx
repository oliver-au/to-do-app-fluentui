import { render, screen, waitForElementToBeRemoved, RenderResult } from '@testing-library/react';
import { Provider } from "react-redux";
import { rootReducer, RootState } from '../store/reducers'
import { createStore, Store } from 'redux'
import { applyMiddleware, Middleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import rootSaga from '../store/sagas'
import createSagaMiddleware from 'redux-saga'

const initialState: RootState = {
	todo: {
		todos: [],
		filter: 'all'
	},
	loading: {
		loading: false
	},
	notification: {
		notifications: [],
		nextId: 1
	}
}

interface renderWithProviders {
  (
    ui: React.ReactElement,
    reduxOptions?: {
		state?: RootState,
		isLogger?: boolean
    }
  ): RenderResult & {
    store: Store,
	finishLoading: () => void
  }
}
export const renderWithProviders: renderWithProviders = (
	ui,
	{ state = initialState, isLogger = false} = {}
) => {

	const sagaMiddleware = createSagaMiddleware()

	const middlewares: Middleware[] = [sagaMiddleware]
	isLogger && middlewares.push(logger)

	const store = createStore(
		rootReducer,
		state,
		composeWithDevTools(applyMiddleware(...middlewares))
	)

	sagaMiddleware.run(rootSaga)

	const finishLoading = async () => {
		await waitForElementToBeRemoved(() => screen.getByText("Loading..."))
	}
	return {
		...render(<Provider store={store}>{ui}</Provider>),
		// adding `store` to the returned utilities to allow us
		// to reference it in our tests (just try to avoid using
		// this to test implementation details).
		store,
		finishLoading
	}
}
