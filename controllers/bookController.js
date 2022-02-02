import Book from '../models/Book.js';

const createBook = async (req, res) => {
  const { title, genre } = req.body;

  if (!title || !genre) {
    return new Error('Please provide all values');
  }
  const book = await Book.create(req.body);
  res.status(201).json({ book });
};

const getAllBooks = async (req, res) => {
  const books = await Book.find({});

  res.status(200).json({ books });
};

const deleteBook = async (req, res) => {
  const { id: bookId } = req.params;

  const book = await Book.findOne({ _id: bookId });
  if (!book) {
    throw new Error(`No book find with id : ${bookId}`);
  }
  await book.remove();
  res.status(200).json({ msg: 'Success book removed!' });
};

const updateBook = async (req, res) => {
  const { id: bookId } = req.params;

  const updateBook = await Student.findOneAndUpdate({ _id: bookId }, req.body, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({ updateBook });
};

export { createBook, getAllBooks, deleteBook, updateBook };
