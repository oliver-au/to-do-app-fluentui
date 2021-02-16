import { PUSH_NOTIFICATION, DELETE_NOTIFICATION, NotificationActionTypes } from './types'
import { notificationinitialState, NotificationState} from './states'

export default (state = notificationinitialState, action: NotificationActionTypes): NotificationState => {
	switch (action.type) {
		// case PUSH_NOTIFICATION:
		// 	return {
		// 		notifications: state.notifications.concat([{
		// 			id: state.nextId,
		// 			notificationType: action.notificationType,
		// 			message: action.message
		// 		}]),
		// 		nextId: state.nextId + 1
		// 	}
		case PUSH_NOTIFICATION:
			return {
				notifications: [{
					id: state.nextId,
					notificationType: action.notificationType,
					message: action.message
				}],
				nextId: state.nextId + 1
			}
		case DELETE_NOTIFICATION: 
			return {
				...state,
				notifications: state.notifications.filter((notification) => {
					return notification.id !== action.id
				})
			}
		default:
			return state;		
	}
}

