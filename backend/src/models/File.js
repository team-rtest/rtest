import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    originalName: String,
    encoding: String,
    mimetype: String,
    path: String,
    size: Number,
    sizeFormatted: String,
});

const file = mongoose.model("file", fileSchema);
export default file;