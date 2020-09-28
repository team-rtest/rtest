import user from "../models/User";

export default {
  Query: {
    user: async (parent, { id }, { models: { User }, me }, info) => {
      const user = await User.findById({ _id: id }).exec();
      return user;
    },
  },
  Mutation: {
    CreateStudent: async (
      parent,
      studentInput,
      { models: { User }, me },
      info
    ) => {
      const student = new User(StudentInput);
      await student.save();
      return student;
    },
    CreateInstructor: async (
      parent,
      instructorInput,
      { models: { User }, me },
      info
    ) => {
      const instructor = new User(instructorInput);
      await instructor.save();
      return instructor;
    },
  },
};
