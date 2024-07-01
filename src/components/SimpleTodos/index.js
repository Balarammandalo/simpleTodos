import './index.css'
import {Component} from 'react'
import TodoItem from '../TodoItem'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosList: initialTodosList}

  onDeleteTodo = id => {
    const {todosList} = this.state
    const filterTodo = todosList.filter(eachItem => eachItem.id !== id)
    this.setState({todosList: filterTodo})
  }

  render() {
    const {todosList} = this.state
    return (
      <div className="todoContainer">
        <div className="simpleTodoList">
          <h1 className="simpleHead">Simple Todos</h1>
          <ul className="unorderList">
            {todosList.map(eachItem => (
              <TodoItem
                todosDetails={eachItem}
                key={eachItem.id}
                deleteTodo={this.onDeleteTodo}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos

// Write your code here
// import './index.css'

// let TodoItem = props => {
//   let {todosDetails, deleteTodo} = props
//   let {id, title} = todosDetails

//   let onDelete = () => {
//     deleteTodo(id)
//   }

//   return (
//     <li className="todoList">
//       <p>{title}</p>
//       <button type="button" className="button" onClick={onDelete}>
//         Delete
//       </button>
//     </li>
//   )
// }

// export default TodoItem
