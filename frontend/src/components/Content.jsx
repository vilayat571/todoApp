import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getTodo, removeOld, selectedItems, toggle } from '../redux/todos/todoSlice';

function Content() {
	const data = useSelector(selectedItems);
	const filters = useSelector(state => state.todoReducer.allFilter);

	const dispacth = useDispatch()
	const handleDelete = (id) => {
		dispacth(removeOld(id))
	};
	const handleToggle = async (id, completed) => {
		await dispacth(toggle({ id, data: { completed } }))
	};
	useEffect(() => {
		dispacth(getTodo())
	})
	let filtered = [];
	filtered = data;
	if (filters !== 'all') {
		filtered = data.filter(item => filters === 'active' ?
			item.completed === false && item
			: item.completed === true && item
		)
	}
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<label htmlFor="toggle-all">
				Mark all as complete
			</label>

			<ul className="todo-list">
				{
					filtered.map((item) => (
						<li key={item.id} className={item.completed ? 'completed' : ''}>
							<div className="view">
								<input onClick={() => handleToggle(item.id, !item.completed)} className="toggle" type="checkbox" />
								<label>{item.title}</label>
								<button onClick={() => handleDelete(item.id)} className="destroy"></button>
							</div>

						</li>
					))
				}

			</ul>
		</section>

	)
}

export default Content
