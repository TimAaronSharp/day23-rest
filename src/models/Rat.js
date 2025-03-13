import { Schema } from "mongoose";



export const RatSchema = new Schema(
  {
    name: { type: String, minLength: 1, maxLength: 100, required: true },
    callsign: { type: String, minLength: 1, maxLength: 100, required: true },
    picture: { type: String, minLength: 1, maxLength: 2000, required: true },
    specialties: [{ type: String, minLength: 1, maxLength: 100, required: true }]
  },
  {
    timestamps: true
  }

)