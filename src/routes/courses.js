const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController'); //lấy phương thức từ controller

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.post('/handle-form-actions', courseController.handleFormActions);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore); // restore
router.delete('/:id', courseController.destroy);//:id =>params
router.delete('/:id/force', courseController.forceDestroy);//:id =>params
router.get('/:id/edit', courseController.edit);
router.get('/:slug', courseController.show);

module.exports = router;
