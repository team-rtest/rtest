import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

// Username, passport, hash, etc. are plugged in by passport-local-mongoose
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  courses: [{

    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    },

    role: {
      type: String,
      enum: ["Instructor", "Assistant", "Student"],
    },
    
  }],
});

userSchema.plugin(passportLocalMongoose);

const user = mongoose.model("user", userSchema);

export default user;
