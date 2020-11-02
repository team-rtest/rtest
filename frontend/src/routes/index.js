import React from "react";

import StudentAssignment from "views/Internal/Student/Assignment/Assignment";
import StudentCourses from "views/Internal/Student/Courses/Courses";

import ProfessorCourses from "views/Internal/Professor/Courses/Courses";

import Login from "views/External/Auth/Login";
import Signup from "views/External/Auth/Signup";
import ResetPassword from "views/External/Auth/ResetPassword";
import ForgotPassword from "views/External/Auth/ForgotPassword";
import Profile from "views/Internal/Profile/Profile";

import ProfessorAssignment from "views/Internal/Professor/Assignment/Assignment";
import AssignmentReview from "views/Internal/Professor/Review/AssignmentReview";
import AssignmentReviewDetails from "views/Internal/Professor/Review/AssignmentReviewDetails";
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
    path: "/professor/assignment/review/:assignmentId",
    page: <AssignmentReviewDetails />,
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
    path: "/professor/assignment",
    page: <ProfessorAssignment />,
  },
  {
    path: "/student/courses",
    page: <StudentCourses />,
  },
  {
    path: "/student/course/:id",
    page: <StudentAssignment />,
  },
];

export { external, internal };
