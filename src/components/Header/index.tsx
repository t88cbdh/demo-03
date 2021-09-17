import React from 'react'
import { nanoid } from 'nanoid'
import './index.scss'

const Header = (props: { addTodo: (arg0: { id: string; name: any; done: boolean }) => void }) => {

  //键盘事件的回调
  const handleKeyUp = (event: { keyCode: any; target: any }) => {
    //解构赋值获取keyCode,target
    const { keyCode, target } = event
    //判断是否是回车按键
    if (keyCode !== 13) return
    //添加的todo名字不能为空
    if (target.value.trim() === '') {
      alert('输入不能为空')
      return
    }

    //获取到输入框的值，准备一个对象 ID使用nanoid库自动生成唯一标识
    const todoObj = { id: nanoid(), name: target.value, done: false }
    //调用父组件的方法 传递新输入的对象
    props.addTodo(todoObj)
    //清空输入框
    target.value = ''
  }


  return (
    <div className="todo-header">
      <input onKeyUp={handleKeyUp}
        type="text" placeholder="请输入你的任务名称，按回车键确认"
        className="todo-header__inp"
      />
    </div>
  )

}
export default Header;