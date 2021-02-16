import { RootState } from '../reducers'
import { NotificationState } from './states'

export const notificationSelector = (state: RootState): NotificationState => state.notification

