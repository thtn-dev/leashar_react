import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import DefaultLayout from '@/common/layouts/DefaultLayout/DefaultLayout';

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
