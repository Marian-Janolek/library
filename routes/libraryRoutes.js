import express from 'express';
const router = express.Router();
import {
  createLibrary,
  updateLibrary,
  deleteLibrary,
  getAllLibraries,
  addToLibrary,
} from '../controllers/libraryController.js';

router.route('/').post(createLibrary).get(getAllLibraries);
router.route('/addToLibrary/:id').patch(addToLibrary).delete(addToLibrary);
router.route('/:id').delete(deleteLibrary).patch(updateLibrary);

export default router;
