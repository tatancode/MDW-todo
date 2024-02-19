import './TodoCounter.css';
function TodoCounter({ total, completed }) {
	return (
		<h2 className="TodoCounter">
			You've completed <span>{completed}</span> out of <span>{total}</span>{' '}
			tasks
		</h2>
	);
}
export { TodoCounter };
