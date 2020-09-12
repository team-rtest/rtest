import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    tags:{

    },
    body: {
        type: String,
    },
    pointsPossible: {
        type: Number,
        required: true,
    },
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "class",
    },
    dateCreated: { type: Date, default: Date.now },
    datePosted: {type: Date},
    dateDue: {type: Date, required: true}

})

const assignment = mongoose.model("assignment", assignmentSchema);

export default assignment;