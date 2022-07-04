import { Document, model, Schema } from "mongoose";

export interface UserInt extends Document {
  discordId: string;
  name: string;
  joints: number;
}

export const User = new Schema({
  discordId: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  joints: {
    type: Number,
    required: true,
  },
});

export default model<UserInt>("user", User);
