/**
 * API Handler Utility
 * Contains functions for interacting with the backend API endpoints.
 * Handles CRUD operations for todos.
 */

import axios from 'axios';

// API base URL configuration
const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Validates todo text
 * @param {string} text - The todo text to validate
 * @returns {boolean} - Whether the text is valid
 */
const validateTodoText = (text) => {
    const trimmedText = text.trim();
    return trimmedText.length > 0 && trimmedText.length <= 500;
};

/**
 * Fetches all todos from the API
 * @param {Function} setToDo - State setter function for todos
 */
const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then((response) => {
            console.log('Data ---> ', response.data);
            setToDo(response.data);
        })
        .catch((err) => console.error("Error fetching data:", err));
};

/**
 * Adds a new todo to the API
 * @param {string} text - The todo text content
 * @param {Function} setText - State setter function for input text
 * @param {Function} setToDo - State setter function for todos
 * @returns {Promise} - Promise that resolves when the todo is added
 */
const addToDo = (text, setText, setToDo) => {
    if (!validateTodoText(text)) {
        return Promise.reject(new Error("Please enter a valid task (1-500 characters)"));
    }

    return axios
        .post(`${baseUrl}/save`, { text: text.trim() })
        .then((response) => {
            console.log(response.data);
            setText("");
            getAllToDo(setToDo);
        })
        .catch((err) => {
            console.error("Error adding ToDo:", err);
            throw err;
        });
};

/**
 * Updates an existing todo in the API
 * @param {string} toDoId - The ID of the todo to update
 * @param {string} text - The new todo text content
 * @param {Function} setText - State setter function for input text
 * @param {Function} setIsUpdating - State setter function for update mode
 * @param {Function} setToDoId - State setter function for todo ID
 * @param {Function} setToDo - State setter function for todos
 * @returns {Promise} - Promise that resolves when the todo is updated
 */
const updateToDo = (toDoId, text, setText, setIsUpdating, setToDoId, setToDo) => {
    if (!validateTodoText(text)) {
        return Promise.reject(new Error("Please enter a valid task (1-500 characters)"));
    }

    return axios
        .put(`${baseUrl}/update`, { _id: toDoId, text: text.trim() })
        .then((response) => {
            console.log("Updated:", response.data);
            setText("");
            setIsUpdating(false);
            setToDoId("");
            getAllToDo(setToDo);
        })
        .catch((err) => {
            console.error("Error updating ToDo:", err);
            throw err;
        });
};

/**
 * Deletes a todo from the API
 * @param {string} _id - The ID of the todo to delete
 * @param {Function} setToDo - State setter function for todos
 */
const deleteToDo = (_id, setToDo) => {
    axios
        .delete(`${baseUrl}/delete`, { data: { _id } })
        .then((response) => {
            console.log(response.data.message);
            getAllToDo(setToDo);
        })
        .catch((err) => console.error("Error deleting ToDo:", err));
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };