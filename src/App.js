import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoItem } from './TodoItem';
import React from 'react';

// const defaultTodos = [
// 	{ text: 'Find a problem you or someone has', completed: true },
// 	{
// 		text: 'Come up with an innovative solution to solve a problem',
// 		completed: false,
// 	},
// 	{ text: 'Gain first 3 customers', completed: false },
// 	{ text: 'Napkin business model', completed: false },
// 	{ text: 'Launch a million dollar business', completed: false },
// ];
// localStorage.setItem('MDW_TODOS_V1', JSON.stringify(defaultTodos));

function App() {
	const localStorageTodos = localStorage.getItem('MDW_TODOS_V1');
	let parsedTodos;
	if (!localStorageTodos) {
		localStorage.setItem('MDW_TODOS_V1', JSON.stringify([]));
		parsedTodos = [];
	} else {
		parsedTodos = JSON.parse(localStorageTodos);
	}

	const [todos, setTodos] = React.useState(parsedTodos);
	const [searchValue, setSearchValue] = React.useState('');

	const numberOfCompletedTodos = todos.filter(
		(todo) => !!todo.completed
	).length;
	const numberOfTotalTodos = todos.length;
	const searchedTodos = todos.filter((todo) => {
		const todoText = todo.text.toLowerCase();
		const searchText = searchValue.toLowerCase();
		return todoText.includes(searchText);
	});

	const persistChanges = (newTodos) => {
		localStorage.setItem('MDW_TODOS_V1', JSON.stringify(newTodos));
		setTodos(newTodos);
	};

	const markCompleteTodo = (todoText) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text == todoText);
		newTodos[todoIndex].completed = true;
		persistChanges(newTodos);
	};

	const deleteTodo = (todoText) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text == todoText);
		newTodos.splice(todoIndex, 1);
		persistChanges(newTodos);
	};

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

export default App;
