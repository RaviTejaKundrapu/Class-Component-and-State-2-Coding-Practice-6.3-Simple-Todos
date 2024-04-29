// Write your code here
import './index.css'

const TodoItem = props => {
  const {Todo, deleteTodo} = props
  const {title, id} = Todo
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="Todo-container">
      <p className="title">{title}</p>
      <button onClick={onDelete} type="button" className="button">
        Delete
      </button>
    </li>
  )
}

export default TodoItem
