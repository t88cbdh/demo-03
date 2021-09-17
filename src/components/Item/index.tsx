import React, { useState } from 'react'
import classNames from 'classnames'
import './index.scss'

const Item = (props: { updateTodo?: any; deleteTodo?: any; id?: any; name?: any; done?: any }) => {
  const [state, setsate] = useState(false)

  //鼠标移入、移出的回调
  const handleMouse = (event: { type: string }) => {
    if (event.type === "mouseenter") {
      setsate(true);
    }
    else setsate(false);
  }

  //勾选、取消勾选某一个todo的回调
  const handleCheck = (id: any, done: boolean) => {
    done = !done
    props.updateTodo(id, done)
  }

  //删除一个todo的回调
  const handleDelete = (id: any) => {
    if (window.confirm('确定删除吗？')) {
      props.deleteTodo(id)
    }
  }

  const { id, name, done } = props

  const btnClass = classNames(
    'todo-item__btn',
    'btn-danger',
    {
      'todo-item__btn--show': state,
      'todo-item__btn--hide': !state
    })

  const itemClass = classNames(
    'todo-item',
    {
      'todo-item__item--on': state,
      'todo-item__item--out': !state
    }
  )

  return (
    <li
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      className={itemClass}
    >
      <label className="todo-item__content">
        <input type="checkbox"
          checked={done}
          onChange={() => handleCheck(id, done)}
          className="todo-item__content-inp" />
        <span>{name}</span>
      </label>

      <button onClick={() => handleDelete(id)}
        className={btnClass}
      >删除</button>
    </li >
  )

}
export default Item;