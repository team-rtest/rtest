import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";
import AssignmentGroup from "../models/AssignmentGroup.js";
import Course from "../models/Course.js";

export default {
  // Query: {

  // },

  AssignmentGroup: {
    assignments: async (assignmentGroup) => {
      return await Assignment.find({ _id: assignmentGroup.assignments });
    },
  },

  Mutation: {
    createAssignmentGroup: async (_, { course, assignmentGroup }) => {
      const ag = new AssignmentGroup(assignmentGroup);
      await ag.save();
      await Course.updateOne(
        { _id: mongoose.Types.ObjectId(course) },
        { $addToSet: { assignmentGroups: ag } }
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
