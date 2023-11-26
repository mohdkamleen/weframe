const express = require('express');
const router = express.Router()
const task = require('../controllers/task')

router.route('/').get(task.getAll);
router.route('/add').post(task.add);   
router.route('/:id')
    .get(task.getById) 
    .patch(task.update) 
    .delete(task.delete)
router.route('/updateStatus/:id').patch(task.updateStatus);   

module.exports = router;
