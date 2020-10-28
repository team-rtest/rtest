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
    removeUser: async (_, { user }) => {
      return await User.findByIdAndDelete(user);
    },
    updateUser: async (_, { id, userData }) => {
      return await User.findByIdAndUpdate(id, userData);
    },

    signup: async (_, { userInput }) => {
      const user = await User.register(
        new User({
          username: userInput.username,
          email: userInput.email,
          firstName: userInput.firstName,
          lastName: userInput.lastName,
        }),
        userInput.password
      );

      const token = generateToken({ username: user.username });
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
  },
};
