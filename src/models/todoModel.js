const mongoose=require("mongoose")

const todoSchema=new mongoose.Schema({
    todoText:String,
    completed:Boolean,
})

const Todo=mongoose.model("UserTodos",todoSchema)

module.exports=Todo