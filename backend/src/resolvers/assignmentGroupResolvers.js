import mongoose from "mongoose";
import AssignmentGroup from "../models/AssignmentGroup.js";

export default {
  Query: {
    assignmentGroup: async (_, { id }) => {
      const a = await AssignmentGroup.findOne({ _id: id }).exec();
      return a;
    },
    assignmentGroups: async () => AssignmentGroup.find().exec(),
  },
  Mutation: {
    createAssignmentGroup: async (_, { assignmentGroup }) => {
      const ag = new AssignmentGroup(assignmentGroup);
      await ag.save();
      Course.updateOne(
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
  },
};
