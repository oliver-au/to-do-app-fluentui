import { Notification } from '../../types'

export const notificationinitialState: NotificationState = {
	notifications: [],
	nextId: 1
}


export type NotificationState = {
	notifications: Notification[],
	nextId: number
}
