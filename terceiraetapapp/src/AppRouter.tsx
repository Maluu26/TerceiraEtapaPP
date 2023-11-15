import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProfileEdit from './ProfileEdit';
import ShowRooms from './showRooms'
import Welcome from './Welcome'


const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfileEdit />} />
        <Route path="/rooms" element={<ShowRooms />} />
        <Route path="/welcome" element={<Welcome />} />
        {/* Adicionar rotas */}
      </Routes>
    </Router>
  );
};
  
  export default AppRouter;