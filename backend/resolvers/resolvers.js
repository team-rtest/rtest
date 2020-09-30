import Course from "../models/Course";
// import Assignment from "../models/Assignment";
// import Submission from "../models/Submission";

export const resolvers = {
  Query: {
    hello: () => "hi",
    course: async () => {
      const course = await Course.findbyId({ _id: id }).exec();
      return course;
    },
    courses: async () => Course.find().exec(),
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
    // createAssignment: async (
    //   parent,
    //   assignmentInput,
    //   { models: Assignment },
    //   info
    // ) => {
    //   const assignment = new Assignment(assignmentInput);
    //   await assignment.save();
    //   return assignment;
    // },
  },
};
