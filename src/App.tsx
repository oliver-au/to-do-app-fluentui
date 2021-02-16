import TodoApp from './components/TodoApp'
import Loading from './components/Loading'
import NotificationContainer from './components/notification/NotificationContainer'

const App = () => {
	return (
		<>
			<TodoApp />
			<Loading />
			<NotificationContainer />
		</>
	);
}

export default App;
