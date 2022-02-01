import mongoose from 'mongoose';

const LibrarySchema = new mongoose.Schema(
  {
    libraryName: {
      type: String,
      required: [true, 'Please provide library name'],
      maxlength: 50,
    },
    headquarter: {
      type: String,
      required: [true, 'Please provide headquarter'],
    },
    students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
      },
    ],
    books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
);

export default mongoose.model('Library', LibrarySchema);
