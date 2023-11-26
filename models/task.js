const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({
    title: String, 
    description: String, 
    assignedUser: String, 
    dueTo: String, 
    status: [],  
}, {
    timestamps: true
})

module.exports = mongoose.model('task', taskSchema);