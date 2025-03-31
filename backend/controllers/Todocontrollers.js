
const { model } = require('mongoose')
const ToDoModel = require('../models/ToDoModel')
const { text } = require('express')

module.exports.getToDo = async (req, res) => {
    try {
        const ToDo = await ToDoModel.find();
        res.json(ToDo);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.saveToDo = async (req, res) => {
    try {
        const { text } = req.body;
        const data = await ToDoModel.create({ text });
        console.log("Added Successfully....");
        console.log(data);
        res.status(201).json(data); // 201 Created
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports.updateToDo = async (req, res) => {
    const {_id, text} = req.body;
    ToDoModel
    .findByIdAndUpdate(_id,{text})
    .then(() => res.send("Updated Successfully...."))
    .catch(err => console.log(err))
}

module.exports.deleteToDo = async (req, res) => {
    const {_id} = req.body;
    ToDoModel
    .findByIdAndDelete(_id)
    .then(() => res.send("Deleted Successfully...."))
    .catch(err => console.log(err))
}