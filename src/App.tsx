import React, { useState } from 'react'
import Header from './components/Header/index'
import List from './components/List/index'
import Footer from './components/Footer/index'
import './App.scss'


const App = () => {


  const [todos, changetodos] = useState([
    { id: '001', name: '吃饭', done: true },
    { id: '002', name: '睡觉', done: true },
    { id: '003', name: '打代码', done: true },
    { id: '004', name: '逛街', done: false }
  ])

  //addTodo用于添加一个todo，接收的参数是todo对象
  const addTodo = (todoObj: object) => {
    //追加一个todo
    changetodos([todoObj, ...todos])
  }

  //updateTodo用于更新一个todo对象
  const updateTodo = (id: string, done: boolean) => {
    //匹配处理数据
    const updatetodos = todos.map((todoObj: { id: String }) => {
      if (todoObj.id === id) return { ...todoObj, done }
      else return todoObj
    })
    changetodos(updatetodos)

  }

  //deleteTodo用于删除一个todo对象
  const deleteTodo = (id: String) => {
    //删除指定id的todo对象
    const deletetodos = todos.filter((todoObj: { id: String }) => {
      return todoObj.id !== id
    })
    changetodos(deletetodos)
  }

  //checkAllTodo用于全选
  const checkAllTodo = (done: Boolean) => {
    //加工数据
    const checkalltodos = todos.map((todoObj: Object) => {
      return { ...todoObj, done }
    })
    changetodos(checkalltodos)
  }

  //clearAllDone用于清除所有已完成的
  const clearAllDone = () => {
    //清除已经完成的任务
    const clearalltodos = todos.filter((todoObj: { done: boolean }) => {
      return todoObj.done === false
    })
    changetodos(clearalltodos)
  }

  return (
    <div className="todo">
      <div className="todo-wrap">
        <Header addTodo={addTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer todos={todos} checkAllTodo={checkAllTodo} clearAllDone={clearAllDone} />
      </div>
    </div>
  )
}
export default App;


