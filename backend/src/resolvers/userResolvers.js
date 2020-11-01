import { generateToken } from "../auth/auth.js";
import User from "../models/User.js";

export default {
  Query: {
    hello: () => "hi",
    user: async (_, { id, username }) => {
      if (id) {
        return await User.findById(id);
      } else if (username) {
        return await User.findOne({ username });
      }
    },

    users: async () => {
      return await User.find();
    },

    me: async (_, __, { user }) => {
      return user;
    },
  },
  Mutation: {
    signup: async (_, { user }) => {
      const u = await User.register(
        new User({
          username: user.username,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName,
        }),
        user.password
      );

      const token = generateToken({ username: u.username });
      // res does not exist here
      res.cookie("token", token, {
        path: "/",
        //secure: true,
        httpOnly: true,
        sameSite: "strict",
        maxAge: 604800,
      });
      return "Account successfully created and authenticated";
    },

    login: async (_, { username, password }, { res }) => {
      const { user } = await User.authenticate()(username, password);

      if (!user) {
        return "Auth failed";
      }

      const token = generateToken({ username: user.username });
      res.cookie("token", token, {
        path: "/",
        //secure: true,
        httpOnly: true,
        sameSite: "strict",
        maxAge: 604800,
      });
      return "Successfully authenticated";
    },

    updateUser: async (_, { id, user }) => {
      return await User.findByIdAndUpdate(id, user);
    },

    deleteUser: async (_, { id }) => {
      return await User.findByIdAndDelete(id);
    },
  },
};
