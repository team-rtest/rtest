import mongoose from "mongoose";
import Assignment from "../models/Assignment.js";

export default {
  Mutation: {
    createSubmission: async (_, { submission }) => {
      const s = new Submission(submission);
      await s.save();
      await Assignment.updateOne(
        { _id: mongoose.Types.ObjectId(submission.assignmentId) },
        { $addToSet: { submissions: s._id } }
      );

      return s;
    },

    updateGrade: async (_, { submission, grade }) => {
      await Submission.updateOne(
        { _id: mongoose.Types.ObjectId(submission) },
        { $set: { grade: grade } }
      );
      return grade;
    },
    // peerGradeSubmission: async (_, { peerGradeInput }) => {
    //   creates a new peer grade if the grader hasn't graded the assignment yet
    //   otherwise updates the student's grade
    //   return peerGradeInput; // TODO
    //}
  },
};
