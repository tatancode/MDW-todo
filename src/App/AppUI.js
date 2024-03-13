import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
	numberOfCompletedTodos,
	numberOfTotalTodos,
	searchValue,
	setSearchValue,
	searchedTodos,
	markCompleteTodo,
	deleteTodo,
}) {
	return (
		<>
			<TodoCounter
				completed={numberOfCompletedTodos}
				total={numberOfTotalTodos}
			/>
			<TodoSearch
				searchValue={searchValue}
				setSearchValue={setSearchValue}
			/>

			<TodoList>
				{searchedTodos.map((todo) => (
					<TodoItem
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={() => markCompleteTodo(todo.text)}
						onDelete={() => deleteTodo(todo.text)}
					/>
				))}
			</TodoList>

			<CreateTodoButton />
		</>
	);
}

export { AppUI };
