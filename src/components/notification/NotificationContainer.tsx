import React from 'react'
import { mergeStyleSets } from '@uifabric/merge-styles';
import { useSelector } from "react-redux";
import { notificationSelector } from '../../store/notifications'
import { Notification } from '../../types'
import NotificationBar from './NotificationBar'

export interface IComponentClassNames {
	root: string;
}

const getClassNames = (): IComponentClassNames => {
	
	return mergeStyleSets({
		root: {
			position: 'fixed',
			top: '28px',
			right: '8px',
			maxWidth: 'calc(100% - 16px)',
			zIndex: 1500,
		},
	});
};


const NotificationContainer = () => {
	const { root } = getClassNames();
	const notifications = useSelector(notificationSelector).notifications
	return (
		<>
			<div className={root}>
				{notifications.map((notification: Notification) => {
					const {message, notificationType, id} = notification
					
					return <NotificationBar notificationType={notificationType} message={message} id={id} key={id}/>
				})}
			</div>
		</>
	)
}

export default NotificationContainer