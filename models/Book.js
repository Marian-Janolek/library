import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide title'],
      maxlength: 50,
    },
    genre: {
      type: String,
      required: [true, 'Please provide genre'],
    },
    borrowed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Book', BookSchema);
