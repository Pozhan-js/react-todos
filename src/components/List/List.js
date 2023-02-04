import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
export default class List extends Component {
  render() {
    const { list } = this.props
    return (
      <ul className="todo-main">
        {
          list.map((data) => {
            return <Item
              key={data.id}
              data={data}
              changeStatus={this.props.changeStatus}
              deleteItem={this.props.deleteItem}
              editBtn={this.props.editBtn}
              editContent={this.props.editContent}
            ></Item>
          })
        }
      </ul>
    )
  }
}
