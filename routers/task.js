const express = require('express');
const router = express.Router()
const task = require('../controllers/task')

router.route('/').get(task.getAll);
router.route('/add').post(task.add);   
router.route('/:id')
    .get(task.getById) 
    .put(task.update)
    .patch(task.updateTask)
    .delete(task.delete)

module.exports = router;
