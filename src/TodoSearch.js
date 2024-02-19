import './TodoSearch.css';
import React from 'react';
function TodoSearch({ searchValue, setSearchValue }) {
	return (
		<input
			className="TodoSearch"
			placeholder="Search..."
			value={searchValue}
			onChange={(event) => {
				setSearchValue(event.target.value);
			}}
		/>
	);
}
export { TodoSearch };
