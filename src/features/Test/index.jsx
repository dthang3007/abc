import React from 'react';
import { Link } from 'react-router-dom';

export default function PageTest() {
  return (
    <div>
      Page test<Link to="/auth/login">Login</Link>{' '}
    </div>
  );
}
