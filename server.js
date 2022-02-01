import express from 'express';
const app = express();
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';

import connectDB from './db/connectDB.js';
import libraryRouter from './routes/libraryRoutes.js';
import studentRouter from './routes/studentRoutes.js';
import bookRouter from './routes/bookRoutes.js';

app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running ....');
});

app.use('/api/v1/libraries', libraryRouter);
app.use('/api/v1/students', studentRouter);
app.use('/api/v1/books', bookRouter);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
      .then(() => console.log('Successfull connect to DB'))
      .catch((err) => console.log(err));
    app.listen(port, console.log(`Server is listening on port: ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
