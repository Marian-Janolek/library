import express from 'express';
const router = express.Router();
import {
  createBook,
  updateBook,
  deleteBook,
  getAllBooks,
} from '../controllers/bookController.js';

router.route('/').post(createBook).get(getAllBooks);
router.route('/:id').delete(deleteBook).patch(updateBook);

export default router;
