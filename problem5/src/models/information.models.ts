import mongoose from "mongoose";
import { Status } from "./types";
const { Schema, model } = mongoose;

const informationSchema = new Schema({
  name: String,
  age: Number,
  status: { type: String, enum: Object.values(Status), default: Status.ACTIVE },
});

const Information = model("Information", informationSchema);
export default Information;
