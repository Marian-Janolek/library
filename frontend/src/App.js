import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddBook from './pages/AddBook';
import AddLibrary from './pages/AddLibrary';
import AddStudent from './pages/AddStudent';
import AllLibraries from './pages/AllLibraries';
import SharedLayout from './pages/SharedLayout';
import AllStudents from './pages/AllStudents';
import Stats from './pages/Stats';
import AddToLibrary from './pages/AddToLibrary';
import ListOfBooks from './components/ListOfBooks';
import BorrowBook from './components/BorrowBook';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="/all-libraries" element={<AllLibraries />} />
          <Route path="/add-library" element={<AddLibrary />} />
          <Route path="/addToLibrary" element={<AddToLibrary />} />
          <Route path="/addBookToLibrary" element={<ListOfBooks />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/students" element={<AllStudents />} />
          <Route path="/borrow-book" element={<BorrowBook />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/books" element={<div>knihy</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
