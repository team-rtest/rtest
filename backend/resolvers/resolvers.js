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
    student: async(_, { id }) =>{
      const s = await User.findbyId({_id: id}).exec();
      return s;
    },
    instructor: async(_, { id }) =>{
      const i = await User.findbyId({_id: id}).exec();
      return i;
    },
    assignment: async (_, { id }) =>{
      const a = await Assignment.findbyId({_id: id}).exec();
      return a;
    },
    submission: async(_, { id }) =>{
      const su = await Submission.findbyId({_id: id}).exec();
      return su;
    },


    courses: async () => Course.find().exec(),
    student: async() => User.find().exec(),
    instructor: async() => User.find().exec(),
    assignment: async() => Assignment.find().exec(),
    // submission: async () => {
    //   const submission = await Submission.findById({ _id: id }).exec();
    //   return submission;
    // },
    // assignment: async (
    //   parent,
    //   { id },
    //   { models: { Assignments }, me },
    //   info
    // ) => {
    //   const assignment = await Assignments.findById({ _id: id }).exec();
    //   return assignment;
    // },
  },
  Mutation: {
    createCourse: async (_, { course }) => {
      const c = new Course(course);
      await c.save();
      return c;
    },
    createStudent: async(_, { student }) => {
      const s = new User(student);
      await s.save();
      return s;
    },
    createInstructor: async(_, { instructor }) => {
      const i = new User(instructor);
      await i.save();
      return i;
    },
    createAssignment: async(_, { assignment }) =>{
      const a = new Assignment(assignment);
      await a.save();
      return a;
    }
    

    // createAssignment: async (
      //   assignmentInput,
      //   parent,
    //   { models: Assignment },
    //   info
    // ) => {
    //   const assignment = new Assignment(assignmentInput);
    //   await assignment.save();
    //   return assignment;
    // },
  },
};
