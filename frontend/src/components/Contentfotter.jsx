import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { change, clearAll, selectedItems } from '../redux/todos/todoSlice'

function Contentfotter() {
  const data = useSelector(selectedItems);
  const dispacth = useDispatch()
  const filters = useSelector(state => state.todoReducer.allFilter)
  const filter = data.filter(item => {
    return item.completed === true
  });
  const handleClick = (text) => {
    dispacth(change(text))
  };
  const handleClear = () => {
    dispacth(clearAll())
  }
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong style={{ marginRight: "10px" }}>
          {
            filter.length
          }
        </strong>
        items left
      </span>

      <ul className="filters">
        <li>
          <a href="#/" onClick={() => handleClick('all')} className={filters === 'all' ? 'selected' : ""}>All</a>
        </li>
        <li>
          <a href="#/" onClick={() => handleClick('active')} className={filters === 'active' ? 'selected' : ""}>Active</a>
        </li>
        <li>
          <a href="#/" onClick={() => handleClick('completed')} className={filters === 'completed' ? 'selected' : ""}>Completed</a>
        </li>
      </ul>

      <button onClick={() => handleClear()} className="clear-completed">
        Clear completed
      </button>
    </footer>
  )
}

export default Contentfotter
