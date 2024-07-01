// Write your code here
import './index.css'

const TodoItem = props => {
  const {todosDetails, deleteTodo} = props
  const {id, title} = todosDetails

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoList">
      <p>{title}</p>
      <button type="button" className="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
