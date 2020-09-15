import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  instructor: {
    type: Boolean,
    required: true,
  },
  createdAt: { type: Date, default: Date.now },
  classes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "class",
    },
  ],
});

userSchema.plugin(passportLocalMongoose, {
  usernameField: 'username'
});

const user = mongoose.model("user", userSchema);

export default user;
