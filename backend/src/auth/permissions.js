import User from "../models/User.js";

export const getUser = async (username) => {
  return await User.findOne({ username });
};

export const generateUserModel = ({ user }) => ({
  getRole: (course) => {},
  canEditSubmission: (submission) => {},
  isCourseInstructor: (course) => {},
  canGrade: (submission) => {},
  canPeerGrade: (submission) => {},
});
