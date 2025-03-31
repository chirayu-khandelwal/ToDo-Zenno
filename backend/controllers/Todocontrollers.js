// controllers/ToDoController.js

const ToDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
    try {
        const toDo = await ToDoModel.find();
        res.send(toDo);
    } catch (err) {
        console.error("Error fetching ToDos:", err);
        res.status(500).send({ message: "Error fetching ToDos", error: err });
    }
};

module.exports.saveToDo = async (req, res) => {
    const { text } = req.body;
    try {
        const data = await ToDoModel.create({ text });
        console.log("Added Successfully...");
        console.log(data);
        res.status(201).send(data); // Send 201 status for created
    } catch (err) {
        console.error("Error saving ToDo:", err);
        res.status(500).send({ message: "Error saving ToDo", error: err });
    }
};

module.exports.updateToDo = async (req, res) => {
    const { _id, text } = req.body;
    try {
        // Add { new: true } to return the updated document
        const updatedToDo = await ToDoModel.findByIdAndUpdate(_id, { text }, { new: true });
        if (!updatedToDo) {
            return res.status(404).send({ message: "ToDo not found" });
        }
        res.send(updatedToDo); // Send the updated document back
        console.log("Updated Successfully...");
    } catch (err) {
        console.error("Error updating ToDo:", err);
        res.status(500).send({ message: "Error updating ToDo", error: err });
    }
};

module.exports.deleteToDo = async (req, res) => {
    const { _id } = req.body;
    try {
        const deletedToDo = await ToDoModel.findByIdAndDelete(_id);
        if (!deletedToDo) {
            return res.status(404).send({ message: "ToDo not found" });
        }
        res.send({ message: "Deleted Successfully..." });
        console.log("Deleted Successfully...");
    } catch (err) {
        console.error("Error deleting ToDo:", err);
        res.status(500).send({ message: "Error deleting ToDo", error: err });
    }
};