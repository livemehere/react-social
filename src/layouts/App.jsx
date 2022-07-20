import React, { useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';

function App() {
  const [isLogin] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {isLogin ? (
          <Route path={'/'} element={<Home />} />
        ) : (
          <>
            <Route path={'/'} element={<Navigate to={'/login'} />} />
            <Route path={'/login'} element={<LogIn />} />
            <Route path={'/signup'} element={<SignUp />} />
          </>
        )}
        <Route path={'*'} element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
