import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { LibraryProvider } from './context/libraryContext';
import { StudentProvider } from './context/studentContext';
import { BookProvider } from './context/bookContext';

ReactDOM.render(
  <React.StrictMode>
    <LibraryProvider>
      <StudentProvider>
        <BookProvider>
          <App />
        </BookProvider>
      </StudentProvider>
    </LibraryProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
