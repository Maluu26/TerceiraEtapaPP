import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProfileEdit from './ProfileEdit';
import ShowRooms from './showRooms';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Cadastro';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route path="/rooms" element={<ShowRooms />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Adicionar rotas */}
      </Routes>
    </Router>
  );
};
  
  export default AppRouter;