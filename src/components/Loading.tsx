import React from 'react'
import { Spinner, mergeStyleSets } from '@fluentui/react'
import { useSelector } from 'react-redux'
import { loadingSelector } from '../store/loading/selector'

interface IComponentClassNames {
	loading: string
}

const getClassNames = (): IComponentClassNames => {
	return mergeStyleSets({
		loading: {
			position: 'fixed',
			left: '50%',
			top: '50%',
		},
	})
}

const Loading = () => {
	const loadingState = useSelector(loadingSelector)
	const { loading } = getClassNames()
	const loadingStatus = loadingState.loading

	return (
		<>
			{
				loadingStatus && (
					<div className={loading}>
						<Spinner label="Loading..." ariaLive="assertive" labelPosition="bottom" />
					</div>
				)
			}
		</>
	
	)
}

export default Loading