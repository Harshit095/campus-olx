const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },

    outlookId: {
      type: String,
      required: true,
      unique: true,
    },

    profilePic: {
      type: String,
      default: "",
    },

    contact: {
      type: Number,
    },

    desc: {
      type: String,
    },

    address: {
      type: String,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
