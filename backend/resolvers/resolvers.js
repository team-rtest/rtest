import Course from "../models/Course";
import "regenerator-runtime/runtime";
import { UserExistsError } from "passport-local-mongoose/lib/errors";
import { async } from "regenerator-runtime/runtime";
import Assignment from "../models/Assignment";
import Submission from "../models/Submission";
import User from "../models/User";
// import Assignment from "../models/Assignment";
// import Submission from "../models/Submission";

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
    submission: async (_, { id }) => {
      const su = await Submission.findbyId({ _id: id }).exec();
      return su;
    },

    courses: async () => Course.find().exec(),
    users: async () => User.find().exec(),
    assignments: async () => Assignment.find().exec(),
    submissions: async () => Submission.find().exec(),
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
    createAssignment: async (_, { assignment }) => {
      const a = new Assignment(assignment);
      await a.save();
      return a;
    },
  },
};
