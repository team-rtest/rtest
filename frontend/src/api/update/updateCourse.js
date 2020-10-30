import { gql } from "@apollo/client";

export default gql`
  mutation UpdateCourse($courseId: ID!, $courseData: CourseInput!) {
    updateCourse(courseId: $courseId, courseData: $courseData) {
      _id
    }
  }
`;
