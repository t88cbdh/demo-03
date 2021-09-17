import React from 'react'
import Item from '../Item/index'
import './index.scss'

const List = (props) => {

  const { todos, updateTodo, deleteTodo } = props
  return (
    <ul className="todo-list">
      {
        todos.map(todo => {
          //{...todo} => 批量传递  id={todo.id} name={todo.name} done={todo.done}
          return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        })
      }
    </ul>
  )

}
export default List;