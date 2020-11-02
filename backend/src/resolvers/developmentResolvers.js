import AssignmentGroup from "../models/AssignmentGroup.js";
import Assignment from "../models/Assignment.js";
import Submission from "../models/Submission.js";
import Course from "../models/Course.js";

export default {
  // These are resolvers you should not be using from the frontend! They are unprotected top-level
  // resolvers I'm keeping here for convenience temporarily
  // They will get deprecated soon(TM)
  // You should be nesting you graphql queries instead:
  //
  // {
  //     course(id: "id") {
  //         assignmentGroups {
  //             assignments {
  //                 _id,
  //                 name
  //             }
  //         }
  //     }
  // }
  //
  Query: {
    courseUNSAFE: async (_, { id }) => await Course.findById(id),
    coursesUNSAFE: async () => await Course.find(),
    assignmentGroup: async (_, { id }) => await AssignmentGroup.findById(id),
    assignmentGroups: async () => await AssignmentGroup.find(),
    submission: async (_, { id }) => await Submission.findById(id),
    submissions: async () => await Submission.find(),
    assignment: async (_, { id }) => await Assignment.findById(id),
    assignments: async () => await Assignment.find(),
  },
};
