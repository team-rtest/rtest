import { gql } from "@apollo/client";

export default gql`
  mutation CreateCourse($course: CourseInput) {
    createCourse(course: $course) {
      _id
    }
  }
`;
