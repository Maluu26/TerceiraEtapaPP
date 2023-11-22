import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import ProfileEdit from './ProfileEdit';
import ShowRooms from './showRooms';
import Welcome from './Welcome';
import Login from './Login';
import Register from './Cadastro';
import SeeProfile from './ProfilePage';
import Success from './successPage';
import AdminPage from './admPage'

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/profile" element={<ProfileEdit />} /> {/* Responsivo*/}
        <Route path="/see-profile" element={<SeeProfile />} /> {/* Responsivo*/}
        <Route path="/rooms" element={<ShowRooms />} /> {/* Responsivo*/}
        <Route path="/welcome" element={<Welcome />} /> {/* Responsivo*/}
        <Route path="/login" element={<Login />} /> {/* Responsivo*/}
        <Route path="/register" element={<Register />} /> {/* Responsivo*/}
        <Route path="/success" element={<Success />} /> {/* Responsivo*/}
        <Route path="/adm" element={<AdminPage/>} /> {/* Responsivo*/}
        {/* Adicionar rotas */}
      </Routes>
    </Router>
  );
};
  
  export default AppRouter;