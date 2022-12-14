import React from 'react';
import './app-header.css'

const AppHeader = (props) => {
    return(
      <div className="appHeader">
        <h1>Todo List</h1>
        <h3>{props.toDo} more to do, {props.done} done</h3>
      </div>
    );
  }

  export default AppHeader;