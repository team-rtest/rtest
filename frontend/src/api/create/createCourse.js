import { gql } from "@apollo/client";

export default gql`
  mutation CreateCourse($course: Course) {
    createCourse(course: $course) {
      _id
    }
  }
`;
