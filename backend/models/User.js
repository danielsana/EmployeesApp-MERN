// models/User.js
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
let userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  {
    collection: "users",
  }
);
userSchema.plugin(uniqueValidator, { message: "Email already in use." });
module.exports = mongoose.model("User", userSchema);
