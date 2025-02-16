const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    blogName: {
        type: String,
        required: true,
        trim: true,  
    },
    blogDescription: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,  
    },
});

module.exports = mongoose.model("Blog", blogSchema);
