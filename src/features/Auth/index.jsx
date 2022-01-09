import Login from 'features/Auth/pages/SignIn';
import PageTest from 'features/Test';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router';

function Auth() {
  const match = useLocation();
  console.log(match);
  return (
    <Routes>
      {/* <Route exact path={match.path} element={<Test />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="" element={<PageTest />} />
    </Routes>
  );
}

export default Auth;
