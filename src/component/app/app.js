import React, {Component} from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'
import ItemAddForm from '../item-add-from'

export default class App extends Component {
  maxId = 100;
  state ={  
    todoData : [
        {id: 0, label: 'Drink more coffee', important: false},
        {id: 1, label: 'Make awesome app', important: true},
        {id: 2, label: 'Have lunch', important: false} 
    ]
  }
  deleteItem = ( id )=>{
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx +1 )
      ]
      return {
        todoData: newArray
      }
    })
  }
  addItem = (text) => {
  
 const newItem = {
   label: text,
   important: false,
    id: this.maxId++
 }
    this.setState(({ todoData }) =>{
      const newArray = [
        ...todoData,
        newItem
      ]
   return { todoData: newArray}
  })
   
  }

  render(){
    return (
        <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
        todos={this.state.todoData}
        onDeleted = {this.deleteItem}/>

        <ItemAddForm
        onItemAdded = {this.addItem}/>
      </div>
    )}}