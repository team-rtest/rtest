import React from "react";

import Assignment from "views/Internal/Student/Assignment/Assignment";
import StudentCourses from "views/Internal/Student/Courses/Courses";

import ProfessorCourses from "views/Internal/Professor/Courses/Courses";

import Login from "views/External/Auth/Login";
import Signup from "views/External/Auth/Signup";
import ResetPassword from "views/External/Auth/ResetPassword";
import ForgotPassword from "views/External/Auth/ForgotPassword";

import AssignmentReview from "views/Internal/Professor/Review/AssignmentReview";
import CreateCourse from "views/Internal/Professor/CreateCourse/CreateCourse";
import EditCourse from "views/Internal/Professor/EditCourse/EditCourse";
import CreateAssignment from "views/Internal/Professor/CreateAssignment/CreateAssignment";
import CreateAssignmentGroup from "views/Internal/Professor/CreateAssignmentGroup/CreateAssignmentGroup";

const external = [
  {
    path: "/signup",
    page: <Signup />,
  },
  {
    path: "/login",
    page: <Login />,
  },
  {
    path: "/reset-password",
    page: <ResetPassword />,
  },
  {
    path: "/forgot-password",
    page: <ForgotPassword />,
  },
];

const internal = [
  {
    path: "/",
    page: <ProfessorCourses />,
  },
  {
    path: "/professor/courses",
    page: <ProfessorCourses />,
  },
  {
    path: "/professor/assignment/review",
    page: <AssignmentReview />,
  },
  {
    path: "/professor/create-course",
    page: <CreateCourse />,
  },
  {
    path: "/professor/edit-course",
    page: <EditCourse />,
  },
  {
    path: "/professor/create-assignment",
    page: <CreateAssignment />,
  },
  {
    path: "/professor/create-assignment-group",
    page: <CreateAssignmentGroup />,
  },
  {
    path: "/student/courses",
    page: <StudentCourses />,
  },
  {
    path: "/student/course/:id",
    page: <Assignment />,
  },
];

export { external, internal };
