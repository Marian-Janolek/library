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

  const library = await Student.findOne({ _id: libraryId });
  if (!library) {
    throw new Error(`No library find with id : ${libraryId}`);
  }
  await library.remove();
  res.status(200).json({ msg: 'Success library removed!' });
};

const updateLibrary = async (req, res) => {
  const { id: libraryId } = req.params;
  const { libraryName, headquarter } = req.body;

  if (!libraryName || !headquarter) {
    throw new Error('Please provide all values');
  }

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

export { createLibrary, getAllLibraries, deleteLibrary, updateLibrary };
