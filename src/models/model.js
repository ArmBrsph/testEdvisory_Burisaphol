import mongoose, { Schema } from "mongoose";



const noteSchema = Schema({
    Note: {
        type: String,
        required: true
    },
    Customer: {
        type: String,
        required: true
    },
    HistoryNote: {
        type: Date,
        default: new Date()
    },
    CatagoryNote: {
        type: String,
        required: true
    },
});

export const noteModel = mongoose.model("note",noteSchema)

