import React, { lazy } from 'react';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import PageNotFound from 'pages/PageNotFound';
import Navbar from 'components/Navbar/Navbar';

const Login = lazy(() => import('pages/auth/Login'));
const SignUp = lazy(() => import('pages/auth/SignUp'));

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <Navbar />
      </div>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },

  {
    path: '/*',
    element: <PageNotFound />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
