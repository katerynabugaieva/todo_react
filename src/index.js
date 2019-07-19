import React from "react";
import ReactDOM from "react-dom";

const TodoList = () => {
    return (
<ul>
        <li>Learn react</li>
        <li>Build awesome app </li>
    </ul>
    )
}

const AppHeader = () => {
    return (
        <h1>My TODO List</h1>
    )
}

const SearchPanel =()=><input placeholder="search"/>

const App = () =>{
    return (
    <div>
        <AppHeader/>
        <SearchPanel/>
        <TodoList/>
    </div>
)}

ReactDOM.render(<App/>, document.getElementById('root'));

