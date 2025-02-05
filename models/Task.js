const mongoose = require('mongoose'); 

const TaskSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: [true, 'Title is required'], 
        trim: true, 
    },
    description: {
        type: String, 
        trim: true, 
    },
    completed: {
        type: Boolean, 
        default: false,
    },
    createdAt: {
        type: Date, 
        default: Date.now, 
    },
});

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;