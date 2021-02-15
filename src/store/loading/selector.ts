import { RootState } from '../reducers'
import { ILoadingState } from './state'

export const loadingSelector = (state: RootState): ILoadingState => state.loading