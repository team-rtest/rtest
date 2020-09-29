import Course from "../models/Course";

export const resolvers =  {
  Query: {
    hello: () => "hi",
    course: async (parent, { id }, { models: { Course }, me }, info) => {
      const course = await Course.findbyId({ _id: id }).exec();
      return course;
    },
    courses: async () => Course.find(),
  },
  Mutation: {
    createCourse: async (
      courseInput,
    ) => {
      const course = new Course(courseInput);
      await course.save();
      return course;
    },
  },
};
