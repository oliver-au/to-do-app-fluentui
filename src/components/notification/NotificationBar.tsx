import React from 'react'
import { NotifictionType } from '../../types'
import { useDispatch } from "react-redux";
import { deleteNotificationAction, DeleteNotificationActionPayload } from '../../store/notifications'
import { MessageBar, MessageBarType } from '@fluentui/react'

interface NotificationBarProps {
	id: number,
	message: string
	notificationType: NotifictionType
}

const NotificationBar = (props: NotificationBarProps) => {
	const {message, notificationType, id} = props
	const dispatch = useDispatch();

	React.useEffect(() => {
		setTimeout(() => {
			const payload: DeleteNotificationActionPayload = {
				id
			}
			dispatch(deleteNotificationAction(payload))
		}, 5000)
	}, [])

	return (
		<>
			<MessageBar
				messageBarType={MessageBarType[notificationType]}
			>
				{message}
			</MessageBar>
		</>
	)
}

export default NotificationBar