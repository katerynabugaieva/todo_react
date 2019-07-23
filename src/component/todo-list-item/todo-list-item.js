import React from 'react'
import './todo-list-item.css'

class TodoListItem extends React.Component{
  onLabelClick (){
    console.log(this.props.label)
  }
  render(){
    const {label, important = false} = this.props;

    const style = {
      color: important ? 'steelblue' : 'black',
      fontWeight: important ? 'bold' : 'normal'
    };
  return (
      <span className="todo-list-item">
      <span
        className="todo-list-item-label"
        style={style}
        onClick={ this.onLabelClick.bind(this) }>
        {label}
      </span>

      <button type="button"
              className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
              className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  ) 
  }
}

export default TodoListItem;