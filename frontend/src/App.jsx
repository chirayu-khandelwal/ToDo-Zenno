/**
 * App Component
 * Main application component that serves as the root of the Todo application.
 * Handles the overall layout and routing of the application.
 */

import React from "react";
import TodoList from "./components/TodoList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>ToDo app - Zenno</h1>
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
