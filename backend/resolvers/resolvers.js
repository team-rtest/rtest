import Course from "../models/Course";
import Assignment from "../models/Assignment";
import Submission from "../models/Submission";

export const resolvers = {
  Query: {
    hello: () => "hi",
    course: async (parent, { id }, { models: { Course }, me }, info) => {
      const course = await Course.findbyId({ _id: id }).exec();
      return course;
    },
    courses: async () => Course.find().exec(),
    submission: async (parent, { id }, { model: { Submission }, me }, info) => {
      const submission = await Submission.findById({ _id: id }).exec();
      return submission;
    },
    assignment: async (
      parent,
      { id },
      { models: { Assignments }, me },
      info
    ) => {
      const assignment = await Assignments.findById({ _id: id }).exec();
      return assignment;
    },
  },
  Mutation: {
    createCourse: async (courseInput) => {
      const course = new Course(courseInput);
      await course.save();
      return course;
    },
    createAssignment: async (
      parent,
      assignmentInput,
      { models: Assignment },
      info
    ) => {
      const assignment = new Assignment(assignmentInput);
      await assignment.save();
      return assignment;
    },
  },
};
