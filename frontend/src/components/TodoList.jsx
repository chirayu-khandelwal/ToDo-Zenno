/**
 * TodoList Component
 * Handles the main todo functionality including adding, updating, and deleting todos.
 * Manages the todo list state and user interactions.
 */

import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { getAllToDo, addToDo, updateToDo, deleteToDo } from '../utils/api';

const TodoList = () => {
  // State management for todos and input
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState('');
  const [error, setError] = useState('');

  // Fetch all todos on component mount
  useEffect(() => {
    getAllToDo(setTodos);
  }, []);

  // Clear error message after 3 seconds
  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  // Handle key press for adding/updating todos
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddToDo();
    }
  };

  // Handle adding or updating a todo
  const handleAddToDo = async () => {
    try {
      setError('');
      if (isUpdating) {
        await updateToDo(toDoId, text, setText, setIsUpdating, setToDoId, setTodos);
      } else {
        await addToDo(text, setText, setTodos);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  // Handle updating mode for a todo
  const updateMode = (todo) => {
    setIsUpdating(true);
    setText(todo.text);
    setToDoId(todo._id);
    setError('');
  };

  // Handle deleting a todo
  const handleDeleteToDo = (id) => {
    deleteToDo(id, setTodos);
  };

  return (
    <>
      {/* Input section for adding/updating todos */}
      <div className="top">
        <input 
          type="text" 
          placeholder={isUpdating ? "Update your task..." : "Add a new task..."} 
          value={text} 
          onChange={(e) => {
            setText(e.target.value);
            setError('');
          }}
          onKeyPress={handleKeyPress}
        />
        <div 
          className="add" 
          onClick={handleAddToDo}
          style={{ 
            background: isUpdating ? 'var(--secondary-color)' : 'var(--primary-color)'
          }}
        >
          {isUpdating ? "Update Task" : "Add Task"}
        </div>
      </div>

      {/* Error message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

      {/* Todo list section */}
      <div className="tasks">
        {todos.map((todo) => (
          <div key={todo._id} className="todo">
            <div className="text">{todo.text}</div>
            <div className="icons">
              <BiEdit className="icon BiEdit" onClick={() => updateMode(todo)} />
              <AiFillDelete className="icon AiFillDelete" onClick={() => handleDeleteToDo(todo._id)} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TodoList;
