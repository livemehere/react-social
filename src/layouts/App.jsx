import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import LogIn from '../pages/LogIn';
import Home from '../pages/Home';
import { listenUserState } from '../services/auth';

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = listenUserState(user => {
      if (user) {
        setIsLogin(true);
      } else {
        setIsLogin(false);
      }
    });
    return () => unsubscribe();
  });
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
