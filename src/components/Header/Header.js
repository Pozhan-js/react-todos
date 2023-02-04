import React, { Component } from 'react'
import './Header.css'
export default class Header extends Component {
  handle = (e) => {
    // 如果按下不是回车键
    if (e.keyCode !== 13) return
    let todoName = e.target.value.trim()
    this.props.getTodoName(todoName)
  }
  render() {

    return (
      <div className="todo-header">
        <input type="text" onKeyDown={this.handle} />
      </div>
    )
  }
}
