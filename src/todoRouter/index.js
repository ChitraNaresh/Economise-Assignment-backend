const express = require("express");
const Todo = require("../models/todoModel");
const router = express.Router();

router.get("/all-todos", async (req, res) => {
  console.log(req.body)
  try {
    const todos = await Todo.find();
    res.status(200).json({
      message: todos,
      success: true,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error while creating todo",
      success: false,
    });
  }
});



router.post("/create-todo", async (req, res) => {
    console.log(req.body)
  try {
    const todo = new Todo(req.body);
    const todoObj=await todo.save();
    res.status(200).json({
      message: todoObj,
      success: true,
    });
  } catch (error) {
    console.log(err);
    res.status(500).json({
      message: "Error while creating todo",
      success: false,
    });
  }
});

router.put("/update-todo/:_id", async(req, res) => {
  console.log(req.body)
  try{
     const updatedTodo=await Todo.findByIdAndUpdate(req.params._id, req.body, { new: true })
      res.status(200).json({
        message: "Todo updated",
        success: true,
      })
  }catch(error){
    console.log(error);
    res.status(500).json({
      message: "Error while updating todo",
      success: false,
    });
  }
});

router.delete("/delete-todo/:_id", async(req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params._id);
        res.status(200).json({message:"Todo deleted"});
      } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
      }
});

module.exports = router;