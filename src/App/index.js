import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import React from 'react';
import { useLocalStorage } from './useLocalStorage';

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
// localStorage.setItem(itemName, JSON.stringify(defaultTodos));

function App() {
	const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);
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

	const markCompleteTodo = (todoText) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === todoText);
		newTodos[todoIndex].completed = true;
		saveTodos(newTodos);
	};

	const deleteTodo = (todoText) => {
		const newTodos = [...todos];
		const todoIndex = newTodos.findIndex((todo) => todo.text === todoText);
		newTodos.splice(todoIndex, 1);
		saveTodos(newTodos);
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
