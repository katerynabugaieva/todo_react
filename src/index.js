import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './component/app-header'
import SearchPanel from './component/search-panel'
import TodoList from './component/todo-list'
import ItemStatusFilter from './component/item-status-filter'
import './index.css'


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
  
        <TodoList todos={todoData} />
      </div>
)}

ReactDOM.render(<App/>, document.getElementById('root'));

