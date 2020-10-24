import mongoose from "mongoose";
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

    // createUser: async (_, { user }) => {
    //   User.register(
    //     new User({
    //       username: user.username,
    //       email: user.email,
    //       firstName: user.firstName,
    //       lastName: user.lastName,
    //     }),
    //     user.password,
    //     (err, user) => {
    //       if (err) {
    //         return { status: "Authentication failed" };
    //       } else {
    //         passport.authenticate("local")(req, res, () => {
    //           const token = generateToken({ username: req.user.username });
    //           res.cookie("token", token, {
    //             path: "/",
    //             secure: true,
    //             httpOnly: true,
    //             sameSite: "strict",
    //           });
    //           return { status: "Successfully Logged In" };
    //         });
    //       }
    //     }
    //   );
    // },
    // },
  },
};
