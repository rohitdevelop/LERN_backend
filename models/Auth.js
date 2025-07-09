const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
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
    background: {
      type: String,
      enum: ["student", "professional", "beginner"],
      default: "beginner",
    },
    experienceLevel: {
      type: String,
      enum: ["beginner", "intermediate", "advanced"],
      default: "beginner",
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt
  }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
