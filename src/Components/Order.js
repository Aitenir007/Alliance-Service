import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export default class Order extends Component {
  handleIncrease = () => {
    this.props.onQuantityChange(this.props.item.id, this.props.item.quantity + 1)
  }

  handleDecrease = () => {
    this.props.onQuantityChange(this.props.item.id, this.props.item.quantity > 1 ? this.props.item.quantity - 1 : 1)
  }

  render() {
    const { item, onDelete } = this.props

    return (
      <div className='item'>
        <img src={"./img/" + item.img} alt='' />
        <h2>{item.title}</h2>
        <b>{item.price}</b>
        <div className='quantity-controls'>
          <button className='addd' onClick={this.handleDecrease}>-</button>
          <span>{item.quantity}</span>
          <button className='addd' onClick={this.handleIncrease}>+</button>
        </div>
        <FaTrash className='delete-icon' onClick={() => onDelete(item.id)} />
      </div>
    )
  }
}
