import React from "react";
import ReactDOM from "react-dom";

const el = (
<div>
    <h1>My TODO List</h1>
    <input placeholder="search"/>
    <ul>
        <li>Learn react</li>
        <li>Build awesome app </li>
    </ul>
</div>
)
ReactDOM.render( el, document.getElementById('root'));

