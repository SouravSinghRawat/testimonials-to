const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for individual space
const SpaceSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    feedbackCount: {
        type: Number,
        default: 0, // Initialize feedback count to 0
    },
});

// Define schema for user
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    spaces: [SpaceSchema], // Array of spaces
    totalSpaces: {
        type: Number,
        default: 0, // Initialize total spaces to 0
    },
});

// Create and export the User model
const UserModel = mongoose.model('User', UserSchema);
module.exports = UserModel;
