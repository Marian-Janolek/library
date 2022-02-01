import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SharedLayout from './pages/SharedLayout';
import Stats from './pages/Stats';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Stats />} />
          <Route path="/all-libraries" element={<div>vsetky kniznice</div>} />
          <Route path="/add-library" element={<div>pridaj kniznicu</div>} />
          <Route path="/students" element={<div>studenti</div>} />
          <Route path="/books" element={<div>knihy</div>} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
