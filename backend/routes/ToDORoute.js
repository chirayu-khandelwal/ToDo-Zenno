const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/Todocontrollers");

const router = Router();

// Get all todos
router.get("/", getToDo);

// Save a new todo (create)
router.post("/save", saveToDo);

// Update an existing todo
router.put("/update", updateToDo);  // Use PUT instead of POST for updates

// Delete a todo
router.delete("/delete", deleteToDo);  // Use DELETE instead of POST for deletes

module.exports = router;
