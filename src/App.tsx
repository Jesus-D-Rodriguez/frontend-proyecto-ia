import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './features/auth/Login';
import Register from './features/auth/Register';
import Navbar from './components/navbar/navbar';
import Accordeon from './features/Accordeon/Accordeon';
import { Avatar, Paper, Typography, makeStyles } from '@mui/material';

import Chat from './features/chat/Chat';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/chat" element={<Chat/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/" element={<Accordeon />} />
      </Routes>
    </Router>
  );
};

export default App;