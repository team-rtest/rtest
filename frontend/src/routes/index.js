import React, { useState } from 'react';

import Assignment from 'views/Student/Assignment/Assignment';
import StudentCourses from 'views/Student/Courses/Courses';

import ProfessorCourses from 'views/Professor/Courses/Courses';

import CreateCourse from 'views/Professor/CreateCourse/CreateCourse';
import EditCourse from 'views/Professor/EditCourse/EditCourse';
import CreateAssignment from 'views/Professor/CreateAssignment/CreateAssignment';
import CreateAssignmentGroup from 'views/Professor/CreateAssignmentGroup/CreateAssignmentGroup';

import Login from 'views/Auth/Login';
import Signup from 'views/Auth/Signup';
import ResetPassword from 'views/Auth/ResetPassword';
import ForgotPassword from 'views/Auth/ForgotPassword';

const routes = [
  {
    path: '/student/courses',
    page: <StudentCourses />
  },
  {
    path: '/student/course/:id',
    page: <Assignment />
  },
  {
    path: '/professor/courses',
    page: <ProfessorCourses />
  },
  {
    path: '/professor/create-course',
    page: <CreateCourse />
  },
  {
    path: '/professor/edit-course',
    page: <EditCourse />
  },
  {
    path: '/professor/create-assignment',
    page: <CreateAssignment />
  },
  {
    path: '/professor/create-assignment-group',
    page: <CreateAssignmentGroup />
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
];

export { routes }
