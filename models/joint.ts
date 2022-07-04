import { Document, model, Schema } from "mongoose";

export interface JointInt extends Document {
  id: string;
  jointCount: number;
}

export const Joint = new Schema({
  id: {
    type: String,
    required: true,
  },
  jointCount: {
    type: Number,
    required: true,
  },
});

export default model<JointInt>("joint", Joint);
