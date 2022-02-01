import mongoose from 'mongoose';

const StudentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, 'Please provide email'],
      unique: true,
    },
    borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
  },
  { timestamps: true }
);

export default mongoose.model('Student', StudentSchema);
