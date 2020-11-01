import Assignment from "../models/Assignment.js";
import User from "../models/User.js";

export default {
  Mutation: {
    createSubmission: async (_, { assignmentId, submission }, { user }) => {
      submission.student = user._id;
      await Assignment.findByIdAndUpdate(assignmentId, {
        $addToSet: { submissions: submission },
      });

      const a = await Assignment.findOne(
        { _id: assignmentId, "submissions.student": user._id },
        { "submissions.$": 1 }
      );
      return a.submissions[0];
    },

    updateGrade: async (_, { assignmentId, studentId, grade }) => {
      await Assignment.updateOne(
        { _id: assignmentId, "submissions.student": studentId },
        { "submissions.$.grade": grade }
      );

      const a = await Assignment.findOne(
        { _id: assignmentId, "submissions.student": user._id },
        { "submissions.$": 1 }
      );
      return a.submissions[0];
    },

    peerGradeSubmission: async (
      _,
      { assignmentId, studentId, peergrade },
      { user }
    ) => {
      peergrade.grader = user._id;
      return await Assignment.updateOne(
        { _id: assignmentId, "submissions.student": studentId },
        {
          $addToSet: { "submissions.$.peerGrades": peergrade },
        }
      );
    },

    updatePeerGrade: async (
      _,
      { assignmentId, studentId, peergrade },
      { user }
    ) => {
      return await Assignment.updateOne(
        {
          _id: assignmentId,
          "submissions.student": studentId,
          "peerGrades.grader": user._id,
        },
        { $set: { "peerGrades.$": peergrade } }
      );
    },

    deleteSubmission: async (_, { assignmentId }, { user }) => {
      const a = await Assignment.findOne(
        { _id: assignmentId, "submissions.student": user._id },
        { "submissions.$": 1 }
      );

      await Assignment.updateOne(
        { _id: assignmentId },
        { $pull: { submissions: { student: user._id } } }
      );

      return a.submissions[0];
    },
  },

  Submission: {
    student: async (submission) => await User.findById(submission.student),
  },

  PeerGrade: {
    grader: async (peerGrade) => await User.findById(peerGrade.grader),
  },
};
