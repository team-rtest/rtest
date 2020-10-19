import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    originalName: String,
    mimetype: String,
    bucket: String,
    key: String,
    size: Number,
});

const file = mongoose.model("file", fileSchema);
export default file;