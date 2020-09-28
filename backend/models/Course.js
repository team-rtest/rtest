import mongoose from "mongoose";
const Schema = { mongoose };

const submissionSchema = new Schema({
  grade: {
    type: Number,
    required: true,
  },

  student: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  file: {
    originalName: String,
    encoding: String,
    mimetype: String,
    path: String,
    size: Number,
    sizeFormatted: String,
  },

  dateSubmitted: {
    type: Date,
    required: true,
  }
});

const assignmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  maxGrade: {
    type: Number,
    required: true,
  },

  dateDue: {
    type: Date,
    required: true,
  },

  optional: {
    type: Boolean,
    required: true,
    default: false,
  },

  locked: {
    type: Boolean,
    required: true,
    default: true,
  },

  dateCreated: {
    type: Date,
    default: Date.now,
  },

  submissions: [submissionSchema]
});

const assignmentGroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  type: {
    type: String,
    required: true,
    enum: ["HW", "TEST", "PEER"],
  },

  grading: {
    weight: {
      type: Number,
      required: true,
    },
    policy: {
      type: String,
      required: true,
    },
  },

  assignments: [assignmentSchema]
});

const courseSchema = new Schema({
  code: { // CS470
    type: String,
    required: true,
  },

  name: { // Data Mining
    type: String,
    required: true,
  },

  semester: { // Fall 2020
    type: String,
    required: true,
  },

  professor: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },

  assistants: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    }
  ],

  students: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    }
  ],

  assignmentGroups: [assignmentGroupsSchema],
});

const course = mongoose.model("course", courseSchema);
export default course;
