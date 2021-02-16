import { combineReducers } from "redux";
import todoReducer from './todos/reducer'
import loadingReducer from './loading/reducer'
import notificationReducer from './notifications/reducers'

export const rootReducer = combineReducers({
  todo: todoReducer,
  loading: loadingReducer,
  notification: notificationReducer
})


export type RootState = ReturnType<typeof rootReducer>