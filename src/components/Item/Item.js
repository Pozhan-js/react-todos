import React, { Component } from 'react'
import './Item.css'
export default class Item extends Component {
  handle = () => {
    const status = !this.props.data.isDone
    this.props.changeStatus(status, this.props.data.id)
  }
  handleDelete = () => {
    const id = this.props.data.id
    this.props.deleteItem(id)
  }
  handleEditBtn = () => {
    // console.log('函数执行')
    // 先让如如框显示
    this.props.editBtn(this.props.data.id)
  }
  handleEdit = (e) => {
    if (e.keyCode !== 13) return
    const todoName = e.target.value
    this.props.editContent(todoName, this.props.data.id)
  }
  render() {
    const { data } = this.props
    return (
      <li>
        <label>
          <input type="checkbox" checked={data.isDone} onChange={this.handle} />
          {data.isEdit ?
            <input type="text" onKeyDown={this.handleEdit} /> :
            <span className={data.isDone ? 'active' : ''}>{data.todoName}</span>
          }
        </label>
        <button className="btn btn-danger" onClick={this.handleDelete}>删除</button>
        <button className="btn btn-danger" onClick={this.handleEditBtn}>编辑</button>
      </li >
    )
  }
}
