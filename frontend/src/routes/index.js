import React from "react";

import Login from "views/External/Auth/Login";
import Signup from "views/External/Auth/Signup";
import ResetPassword from "views/External/Auth/ResetPassword";
import ForgotPassword from "views/External/Auth/ForgotPassword";
import Profile from "views/Internal/Profile/Profile";

import ProfessorDashboard from "views/Internal/Professor/Dashboard/Dashboard";
import ProfessorCourse from "views/Internal/Professor/Course/Course";
import ProfessorAssignment from "views/Internal/Professor/Assignment/Assignment";
import ProfessorSubmission from "views/Internal/Professor/Submission/Submission";

import StudentAssignment from "views/Internal/Student/Assignment/Assignment";
import StudentCourses from "views/Internal/Student/Courses/Courses";

import AssignmentReview from "views/Internal/Professor/Review/AssignmentReview";

const external = [
  {
    path: "/signup",
    page: <Signup />,
  },
  {
    path: "/profile",
    page: <Profile />,
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
    page: <ProfessorDashboard />,
  },
  {
    path: "/professor/courses",
    page: <ProfessorDashboard />,
  },
  {
    path: "/professor/course/:id",
    page: <ProfessorCourse />,
  },
  {
    path: "/professor/assignment/:id",
    page: <ProfessorAssignment />,
  },
  {
    path: "/professor/submission/:id",
    page: <ProfessorSubmission />,
  },
  {
    path: "/professor/review",
    page: <AssignmentReview />,
  },
  {
    path: "/student/dashboard",
    page: <StudentCourses />,
  },
  {
    path: "/student/course/:id",
    page: <StudentAssignment />,
  },
];

export { external, internal };
