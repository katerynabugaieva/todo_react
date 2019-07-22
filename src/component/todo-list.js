import React from 'react'
import TodoListItem from './todo-list-item'

const TodoList = () => {
    return (
<ul>
        <li><TodoListItem label='Drink coffee'/></li>
        <li><TodoListItem 
        label='Create app'
        important //means important = {true}
        /></li>
    </ul>
    )
}
export default TodoList