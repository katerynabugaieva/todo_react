import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './component/app-header'
import SearchPanel from './component/search-panel'
import TodoList from './component/todo-list'


const App = () =>{
    const todoData = [
        {id: 0, label: 'Drink more coffee', important: false},
        {id: 1, label: 'Make awesome app', important: true},
        {id: 2, label: 'Have lunch', important: false}
        
    ]
    return (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList todos = {todoData}/>
    </div>
)}

ReactDOM.render(<App/>, document.getElementById('root'));

