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

    signup: async (_, { userInput }) => {
      User.register(
        new User({
          username: userInput.username,
          email: userInput.email,
          firstName: userInput.firstName,
          lastName: userInput.lastName,
        }),
        userInput.password,
        (err, user) => {
          if (err) {
            return "Authentication failed";
          } else {
            passport.authenticate("local", (_, user, __) => {
              const token = generateToken({ username: user.username });
              res.cookie("token", token, {
                path: "/",
                secure: true,
                httpOnly: true,
                sameSite: "strict", 
              });
              return "Successfully Logged In";
            });
          }
        }
      );  
    },

    // login: async(_, {userInput}) => {
    //   passport.authenticate("local")
    // }
  }, 
};
