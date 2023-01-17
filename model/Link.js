import mongoose from "mongoose";
import { nanoid } from "nanoid";
const linkSchema = new mongoose.Schema({
  longLink: {
    required: [true, "link ee oruulna uu"],
    type: String,
  },
  shortLink: {
    type: String,
  },
});

const Link = mongoose.model("Link", linkSchema);
export default Link;
