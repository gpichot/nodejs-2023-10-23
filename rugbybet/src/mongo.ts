import mongoose from "mongoose";

import { config } from "./config";

mongoose.connect(config.mongodbUri);

const UserSchema = new mongoose.Schema({
  name: String,
  birthdate: Date,
});

const User = mongoose.model("User", UserSchema);
User.find().then(console.log);
