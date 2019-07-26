import React from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import ItemStatusFilter from '../item-status-filter'
import TodoList from '../todo-list'

const App = () =>{
    const todoData = [
        {id: 0, label: 'Drink more coffee', important: false},
        {id: 1, label: 'Make awesome app', important: true},
        {id: 2, label: 'Have lunch', important: false}
        
    ]
    return (
        <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
  
        <TodoList 
        todos={todoData}
        onDeleted = {(id)=> console.log(id)}/>
      </div>
)}

export default App;