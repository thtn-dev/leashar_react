import { Routes, Route } from 'react-router-dom';
import DefaultLayout from '@/common/layouts/DefaultLayout';
import Login from './pages/Login';

function AuthModule() {
  return (
    <DefaultLayout>
      <Routes>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </DefaultLayout>
  );
}

export default AuthModule;
