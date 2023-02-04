import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'
import './App.css'
export default class App extends Component {
  state = {
    list: [
      { id: 1, todoName: '吃饭', isDone: false, isEdit: false },
      { id: 2, todoName: '睡觉', isDone: true, isEdit: false },
      { id: 3, todoName: '游泳', isDone: false, isEdit: false },
    ]
  }
  // 新增选项
  getTodoName = (todoName) => {
    // console.log('打印输入按钮', todoName)
    const obj = {
      id: Date.now(),
      todoName,
      isDone: false,
      isEdit: false
    }
    const newList = [...this.state.list]
    newList.push(obj)
    this.setState({
      list: newList
    })
  }
  // 选项
  changeStatus = (status, id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        item.isDone = status
      }
      return item
    })

    this.setState({
      list: newList
    })
  }

  // 删除按钮
  deleteItem = (id) => {
    const newList = this.state.list.filter((item) => {
      return item.id !== id;
    })
    this.setState({
      list: newList
    })
  }

  // 编辑按钮
  editBtn = (id) => {
    console.log(id)
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        item.isEdit = true;
      }
      return item
    })
    this.setState({
      list: newList
    })
  }

  // 编辑内容
  editContent = (todoName, id) => {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        item.todoName = todoName;
        item.isEdit = false
      }
      return item
    })
    this.setState({ list: newList })
  }

  // 全选按钮
  allChecked = () => {
    let status = this.state.list.every((item) => {
      return item.isDone
    })
    const newList = this.state.list.map((item) => {
      item.isDone = !status
      return item
    })
    this.setState({
      list: newList
    })
  }

  // 清除已经完成的事件
  deleteFinished = () => {
    const newList = this.state.list.filter((item) => {
      return !item.isDone
    })
    this.setState({
      list: newList
    })
  }

  render() {
    let { list } = this.state
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <Header getTodoName={this.getTodoName}></Header>
          <div>
            <List
              list={list}
              changeStatus={this.changeStatus}
              deleteItem={this.deleteItem}
              editBtn={this.editBtn}
              editContent={this.editContent}
            ></List>
            <Footer list={list} allChecked={this.allChecked} deleteFinished={this.deleteFinished}></Footer>
          </div>
        </div>
      </div>
    )
  }
}
