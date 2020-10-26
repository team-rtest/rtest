import mongoose from "mongoose";
import AssignmentGroup from "../models/AssignmentGroup.js";
import Assignment from "../models/Assignment.js";
import Course from "../models/Course.js";

export default {
  Query: {
    assignmentGroup: async (_, { id }) => {
      return await AssignmentGroup.findById(id);
    },
    assignmentGroups: async () => await AssignmentGroup.find(),
  },

  AssignmentGroup: {
    assignments: async (assignmentGroup) => {
      return await Assignment.findById(assignmentGroup.assignments);
    },
  },

  Mutation: {
    createAssignmentGroup: async (_, { assignmentGroup }) => {
      const ag = new AssignmentGroup(assignmentGroup);
      await ag.save();
      await Course.updateOne(
        { _id: mongoose.Types.ObjectId(assignmentGroup.courseId) },
        { $addToSet: { assignmentGroups: ag._id } },
        (err, docs) => {
          if (err) {
            console.log(err);
          } else {
            console.log("Triggered updating course subroutine");
          }
        }
      );
      return ag;
    },

    updateAssignmentGroup: async (
      _,
      { assignmentGroupId, assignmentGroupData }
    ) => {
      return await AssignmentGroup.findByIdAndUpdate(
        assignmentGroupId,
        assignmentGroupData
      );
    },

    deleteAssignmentGroup: async (_, { assignment }) => {
      return await AssignmentGroup.findByIdAndDelete(assignment);
    },
  },
};
