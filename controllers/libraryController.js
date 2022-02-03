import Library from '../models/Library.js';

const createLibrary = async (req, res) => {
  const { libraryName, headquarter } = req.body;

  if (!libraryName || !headquarter) {
    return new Error('Please provide all values');
  }
  const library = await Library.create(req.body);
  res.status(201).json({ library });
};

const getAllLibraries = async (req, res) => {
  const libraries = await Library.find({});

  res.status(200).json({ libraries });
};

const deleteLibrary = async (req, res) => {
  const { id: libraryId } = req.params;

  const library = await Library.findOne({ _id: libraryId });
  if (!library) {
    throw new Error(`No library find with id : ${libraryId}`);
  }
  await library.remove();
  res.status(200).json({ msg: 'Success library removed!' });
};

const updateLibrary = async (req, res) => {
  const { id: libraryId } = req.params;

  const updateLibrary = await Library.findOneAndUpdate(
    { _id: libraryId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({ updateLibrary });
};

const addToLibrary = async (req, res) => {
  const { id: libraryId } = req.params;
  const { studentId, bookId } = req.body;

  const updateLibrary = await Library.findOne({ _id: libraryId });
  const studentIdAlreadyExist = updateLibrary.students.find(
    (id) => id === studentId
  );
  const bookIdAlreadyExist = updateLibrary.books.find((id) => id === bookId);

  if (req.method === 'PATCH') {
    if (studentIdAlreadyExist !== studentId) {
      studentId && updateLibrary.students.push(studentId);
      await updateLibrary.save();
    } else if (bookIdAlreadyExist !== bookId) {
      bookId && updateLibrary.books.push(bookId);
      await updateLibrary.save();
    } else {
      return res.status(400).json({ msg: 'Student sa nachadza v kniznici' });
    }
  }
  if (req.method === 'DELETE') {
    studentId && updateLibrary.students.pop(studentId);
    bookId && updateLibrary.books.pop(bookId);
    await updateLibrary.save();
  }
  res.status(200).json({ updateLibrary });
};

export {
  createLibrary,
  getAllLibraries,
  deleteLibrary,
  updateLibrary,
  addToLibrary,
};
