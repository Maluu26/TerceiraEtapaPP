import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProfileEdit from './ProfileEdit';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfileEdit />} />
        {/* Adicionar rotas */}
      </Routes>
    </Router>
  );
};
  
  export default AppRouter;