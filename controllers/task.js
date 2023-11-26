const Task = require("../models/task");

// route for add new task  
module.exports.add = async (req, res, next) => { 
    if(!(req.body.title && req.body.description && req.body.assignedUser && req.body.dueTo)){
        return res.status(400).json({message:"All feild are required."})
    }
  try { 
    const task = new Task(req.body);
    task.save()
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};   

// route for get all task 
module.exports.getAll = async (req, res, next) => {
  try {
    const user = await Task.find();
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

// route for get single data 
module.exports.getById = async (req, res, next) => {
    try { 
      const task = await Task.findById(req.params.id)
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  };

// route for delete task
module.exports.delete= async (req, res, next) => { 
  try {  
    var task = await Task.findByIdAndDelete(req.params.id);
    res.status(200).json(task);
  } catch (err) {
    next(err);
  }
};

// route for update the task 
module.exports.update = async (req, res, next) => {
    try { 
      const task = await Task.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  };

  // route for update the task 
  module.exports.updateStatus = async (req, res, next) => {
    try { 
      const task = await Task.findByIdAndUpdate(req.params.id, { $push: { status: req.body } });
      res.status(200).json(task);
    } catch (err) {
      next(err);
    }
  };
 
