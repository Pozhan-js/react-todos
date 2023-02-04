import React, { Component } from 'react'
// import Pubsub from 'pubsub-js'
import './Footer.css'
export default class Footer extends Component {
  listNumED = () => {
    const newList = this.props.list.filter((item) => {
      return item.isDone === true
    })
    return newList.length
  }
  allNumEnd = () => {
    const allED = this.props.list.every((item) => {
      return item.isDone === true
    })

    return allED
  }
  render() {
    let { list } = this.props
    return (
      <div className="todo-footer">
        <label>
          <input type="checkbox" checked={this.allNumEnd()} onChange={this.props.allChecked} />
        </label>
        <span>
          <span>已完成 {this.listNumED()}</span> / 全部 {list.length}
        </span>
        <button className="btn btn-danger" onClick={this.props.deleteFinished}>清除已完成任务</button>
      </div>
    )
  }
}
