import './TodoSearch.css';
import React from 'react';
function TodoSearch() {
	const [searchValue, setSearchValue] = React.useState('');
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
