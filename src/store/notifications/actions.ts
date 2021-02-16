import { PUSH_NOTIFICATION, DELETE_NOTIFICATION, NotificationActionTypes } from './types'
import { NotifictionType } from '../../types'

export interface PushNotificationActionPayload {
	notificationType: NotifictionType
	message: string
}

export const pushNotificationAction = (payload: PushNotificationActionPayload): NotificationActionTypes => {
	const { notificationType, message } = payload
	return {
		type: PUSH_NOTIFICATION,
		notificationType,
		message
	}
}

export interface DeleteNotificationActionPayload {
	id: number
}

export const deleteNotificationAction = (payload: DeleteNotificationActionPayload) => {
	const { id } = payload
	return {
		type: DELETE_NOTIFICATION,
		id
	}
}


