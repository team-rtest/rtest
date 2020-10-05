import Course from "../models/Course";
import "regenerator-runtime/runtime";
import { UserExistsError } from "passport-local-mongoose/lib/errors";
import { async } from "regenerator-runtime/runtime";
import Assignment from "../models/Assignment";
import Submission from "../models/Submission";
import User from "../models/User";
import AssignmentGroup from "../models/AssignmentGroup";
import fileHandler from "../routes/fileHandler";

export const resolvers = {
  Query: {
    hello: () => "hi",
    course: async (_, { id }) => {
      const course = await Course.findbyId({ _id: id }).exec();
      return course;
    },
    user: async (_, { id }) => {
      const s = await User.findbyId({ _id: id }).exec();
      return s;
    },
    assignment: async (_, { id }) => {
      const a = await Assignment.findbyId({ _id: id }).exec();
      return a;
    },
    assignmentGroup: async (_, { id }) => {
      const a = await AssignmentGroup.findbyId({ _id: id }).exec();
      return a;
    },
    submission: async (_, { id }) => {
      const su = await Submission.findbyId({ _id: id }).exec();
      return su;
    },

    courses: async () => Course.find().exec(),
    users: async () => User.find().exec(),
    assignments: async () => Assignment.find().exec(),
    assignmentGroups: async () => AssignmentGroup.find().exec(),
    submissions: async () => Submission.find().exec(),

    getPresignedUpload: async (_, { bucket, key }) => {
      return fileHandler.getPresignedUpload(bucket, key);
    },
  },
  Mutation: {
    createCourse: async (_, { course }) => {
      const c = new Course(course);
      await c.save();
      return c;
    },

    createUser: async (_, { user }) => {
      const s = new User(user);
      await s.save();
      return s;
    },

    // TODO the schema is currently not passing the stuff you actually need, make sure to
    // update the input types as needed for your resolvers
    // (This is my fault, I updated the resolvers; I'm not flaming you) - Simon

    createAssignmentGroup: async (_, { assignmentGroup }) => {
      const ag = new AssignmentGroup(assignmentGroup);
      await ag.save();
      // TODO I'm not sure this is correct, read up on how updateOne works and if it needs
      // to be waited on with async, or if it needs exec()
      await Course.updateOne(
        { id: assignmentGroup.courseId },
        { $push: { assignmentGroups: ag._id } }
      );
      return ag;
    },

    createAssignment: async (_, { assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      await AssignmentGroup.updateOne(
        { _id: assignment.assignmentGroupId },
        { $push: { assignments: a._id } }
      );
      return a;
    },

    createSubmission: async (_, { submission }) => {
      const s = new Submission(submission);
      await s.save();
      await Assignment.updateOne(
        { _id: submission.assignmentId },
        { $push: { submissions: s._id } }
      );
    },

    updateGrade: async (_, { gradeInput }) => {
      Submission.updateOne(
        { _id: gradeInput.assignmentId },
        { $set: { grade: gradeInput.grade } }
      );
      return gradeInput.grade;
    },

    // peerGradeSubmission: async (_, { peerGradeInput }) => {
    //   creates a new peer grade if the grader hasn't graded the assignment yet
    //   otherwise updates the student's grade
    //   return peerGradeInput; // TODO
    //}
  },
};
