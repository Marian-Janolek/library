import express from 'express';
const router = express.Router();
import {
  createLibrary,
  updateLibrary,
  deleteLibrary,
  getAllLibraries,
} from '../controllers/libraryController.js';

router.route('/').post(createLibrary).get(getAllLibraries);
router.route('/:id').delete(deleteLibrary).patch(updateLibrary);

export default router;
