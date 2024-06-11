import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';

function AuthModule() {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
    </Routes>
  );
}

export default AuthModule;
