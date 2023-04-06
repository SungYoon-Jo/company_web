import bcrypt from "bcrypt";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, require: true, unique: true },
  username: { type: String, require: true, unique: true },
  password: { type: String, require: true },
  name: { type: String, require: true },
  location: String,
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 5);
});

const User = mongoose.model("User", userSchema);
export default User;
