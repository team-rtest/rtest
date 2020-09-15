import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default {
  Query: {
    user: async (parent, { id }, { models: { userModel }, me }, info) => {
      if (!me) {
        throw new Error("You are not authenticated");
      }
      const user = await userModel.findById({ _id: id }).exec();
      return user;
    },
  },
  Mutation: {
    createUser: async (parent, { name, password }, { models: { userModel } }, info) => {
      const user = await userModel.create({ name, password });
      return user;
    },
  },
  User: {
    posts: async ({ id }, args, { models: { postModel } }, info) => {
      const posts = await postModel.find({ author: id }).exec();
      return posts;
    },
  },
};