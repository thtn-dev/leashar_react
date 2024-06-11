import { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthModule from '@/modules/Auth';

const loading = <div>...loading</div>;
function App() {
  return (
    <Suspense fallback={loading}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/auth/*" element={<AuthModule />}></Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
