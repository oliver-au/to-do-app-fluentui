export type NotifictionType = 'success' | 'error'
export type Notification = {
	id: number
	notificationType: NotifictionType
	message: string
}
