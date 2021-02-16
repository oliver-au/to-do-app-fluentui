import { NotifictionType } from '../../types'

export const PUSH_NOTIFICATION = 'PUSH_NOTIFICATION'
export const DELETE_NOTIFICATION = 'DELETE_NOTIFICATION'

interface PushNotificationAction {
	type: typeof PUSH_NOTIFICATION
	notificationType: NotifictionType,
	message: string
}

interface DeleteNotificationAction {
	type: typeof DELETE_NOTIFICATION
	id: number
}


export type NotificationActionTypes = PushNotificationAction | DeleteNotificationAction