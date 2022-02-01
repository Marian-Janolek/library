import express from 'express';
const router = express.Router();
import {
  createStudent,
  updateStudent,
  deleteStudent,
  getAllStudents,
} from '../controllers/studentController.js';

router.route('/').post(createStudent).get(getAllStudents);
router.route('/:id').delete(deleteStudent).patch(updateStudent);

export default router;
