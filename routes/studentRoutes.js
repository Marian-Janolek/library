import express from 'express';
const router = express.Router();
import {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
  addBookToStudent,
} from '../controllers/studentController.js';

router.route('/').post(createStudent).get(getAllStudents);
router
  .route('/borrowBooks/:id')
  .patch(addBookToStudent)
  .delete(addBookToStudent);
router.route('/:id').delete(deleteStudent).patch(updateStudent);

export default router;
