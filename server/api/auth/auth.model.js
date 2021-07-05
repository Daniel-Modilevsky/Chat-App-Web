const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    userName: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    picture: { type: String, require: true },
    isdeleted: { type: Boolean, default: false },
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userSchema);
