import Student from '../models/Student.js';

const createStudent = async (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return new Error('Please provide all values');
  }
  const student = await Student.create(req.body);
  res.status(201).json({ student });
};

const getAllStudents = async (req, res) => {
  const students = await Student.find({});

  res.status(200).json({ students });
};

const deleteStudent = async (req, res) => {
  const { id: studentId } = req.params;

  const student = await Student.findOne({ _id: studentId });
  if (!student) {
    throw new Error(`No student find with id : ${studentId}`);
  }
  await student.remove();
  res.status(200).json({ msg: 'Success student removed!' });
};

const updateStudent = async (req, res) => {
  const { id: studentId } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    throw new Error('Please provide all values');
  }

  const updateStudent = await Student.findOneAndUpdate(
    { _id: studentId },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({ updateStudent });
};

export { createStudent, getAllStudents, deleteStudent, updateStudent };
