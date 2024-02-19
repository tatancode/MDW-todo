import './TodoItem.css';
function TodoItem(props) {
	return (
		<li className="TodoItem">
			<i
				className={`fa-solid fa-circle-check fa-xl Icon Icon-check ${
					props.completed && 'Icon-check--active'
				}`}></i>

			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
				{props.text}
			</p>
			<i
				className="fa-regular fa-circle-xmark fa-lg Icon Icon-delete"
				style={{ color: '#000000' }}></i>
		</li>
	);
}
export { TodoItem };

// function TodoItem(props) {
// 	return (
// 		<li className="TodoItem">
// 			<span
// 				className={`Icon Icon-check ${
// 					props.completed && 'Icon-check--active'
// 				}`}>
// 				V
// 			</span>
// 			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
// 				{props.text}
// 			</p>
// 			<span className="Icon Icon-delete">X</span>
// 		</li>
// 	);
// }

// export { TodoItem };
