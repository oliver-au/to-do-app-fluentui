import { combineReducers } from "redux";
import todoReducer from './todos/reducer'
import loadingReducer from './loading/reducer'

export const rootReducer = combineReducers({
  todo: todoReducer,
  loading: loadingReducer
})


export type RootState = ReturnType<typeof rootReducer>