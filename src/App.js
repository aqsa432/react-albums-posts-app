// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Albums from './components/Albums';
import AlbumDetails from './components/AlbumDetails';
import Posts from './components/Posts';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; // Import the styles

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Albums />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
