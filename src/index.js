import React from "react";
import ReactDOM from "react-dom";
import AppHeader from './component/app-header'
import SearchPanel from './component/search-panel'
import TodoList from './component/todo-list'


const App = () =>{
    return (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>
)}

ReactDOM.render(<App/>, document.getElementById('root'));

