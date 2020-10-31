import AssignmentGroup from "../models/AssignmentGroup.js";
import Course from "../models/Course.js";
import Assignment from "../models/Assignment.js";

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
    assignment: async (_, { id }) => await Assignment.findById(id),
    assignments: async () => await Assignment.find(),

    test: async (_, { assignmentId }, { user }) => {
      const a = await Assignment.findOne(
        { _id: assignmentId, "submissions.student": user._id },
        { "submissions.$": 1 }
      );

      return a.submissions[0];
    },
  },
};
