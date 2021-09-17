import React from 'react'
import './index.scss'

const Footer = (props: { checkAllTodo?: any; clearAllDone?: any; todos?: any }) => {

  //全选的回调
  const handleCheckAll = (event: { target: { checked: any } }) => {
    props.checkAllTodo(event.target.checked)
  }

  //清除已完成任务的回调
  const handleClearAllDone = () => {
    props.clearAllDone()
  }
  const { todos } = props
  //对数组进行条件统计   
  //已完成的个数
  const doneCount = todos.reduce((pre: number, todo: { done: any }) => pre + (todo.done ? 1 : 0), 0)
  //总数
  const total = todos.length
  return (
    <div className="todo-footer">
      <label className="todo-footer__content">
        <input type="checkbox" onChange={handleCheckAll}
          checked={doneCount === total && total !== 0 ? true : false}
          className="todo-footer__content-inp"
        />
      </label>
      <span>
        <span>已完成{doneCount}</span> / 全部{total}
      </span>
      <button onClick={handleClearAllDone}
        className="todo-footer__btn btn-danger">清除已完成任务</button>
    </div>
  )

}
export default Footer;
