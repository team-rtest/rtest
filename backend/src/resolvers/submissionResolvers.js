import mongoose from "mongoose";
import Submission from "../models/Submission.js";
import Assignment from "../models/Assignment.js";

export default {
  Query: {
    submission: async (_, { id }) => {
      return await Submission.findById(id);
    },
    submissions: async () => await Submission.find(),
  },

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
