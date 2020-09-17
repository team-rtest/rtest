import React, { useState } from 'react';

import Assignment from 'views/Assignment/Assignment';
import Courses from 'views/Courses/Courses';

import Login from 'views/Auth/Login';
import Signup from 'views/Auth/Signup';
import ResetPassword from 'views/Auth/ResetPassword';
import ForgotPassword from 'views/Auth/ForgotPassword';

const routes = [
  {
    path: '/',
    page: <Courses />
  },
  {
    path: '/signup',
    page: <Signup />
  },
  {
    path: '/login',
    page: <Login />
  },
  {
    path: '/reset-password',
    page: <ResetPassword />
  },
  {
    path: '/forgot-password',
    page: <ForgotPassword />
  },
  {
    path: '/assignments/:id',
    page: <Assignment />
  },
  {
    path: '/courses/:id',
    page: <Courses />
  }
];

export { routes }
