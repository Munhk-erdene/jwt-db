import mongoose from "mongoose";
const dataSchema = new mongoose.Schema({
  userName: {
    type: String,
  },
  mail: {
    required: [true, "email esvl passa hi"],
    type: String,
  },
  password: {
    type: String,
  },
});

const Data = mongoose.model("Data", dataSchema);
export default Data;
