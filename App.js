import React from "react";
import "./App.css";
import TodoApp from "./component/TodoApp";
import { newFunction } from "./newFunction";

function App() {
  return (
    <div className="App">
      <span className="title">Todo List</span> <br />
      <div className="addItems">
      </div>
          {newFunction()}
      <div className="col shadow main-col bg-white">
        <div className="row bg-primary text-white">

        </div>
        
      </div>      <TodoApp />
    </div>
  );
}

export default App;


