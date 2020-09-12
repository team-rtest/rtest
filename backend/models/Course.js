import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({

});

const course = mongoose.model("course", courseSchema);
export default course;