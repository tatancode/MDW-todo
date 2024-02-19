import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';

const defaultTodos = [
	{ text: 'Find a problem you or someone has', completed: true },
	{
		text: 'Come up with an innovative solution to solve a problem',
		completed: false,
	},
	{ text: 'Gain first 3 customers', completed: false },
	{ text: 'Launch a million dollar business', completed: false },
];

function App() {
	return (
		<>
			<TodoCounter
				completed={3}
				total={6}
			/>
			<TodoSearch />

			<TodoList>
				{defaultTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
					/>
				))}
			</TodoList>
			<CreateTodoButton />
		</>
	);
}

export default App;
