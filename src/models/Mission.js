import { Schema } from "mongoose";



export const MissionSchema = new Schema(
  {
    codename: { type: String, minLength: 1, maxLength: 100, required: true },
    objective: { type: String, minLength: 1, maxLength: 300, required: true },
    year: { type: String, minLength: 1, maxLength: 20, required: true },
    locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
    ratId: { type: Schema.ObjectId, required: true, ref: 'Rat' },
    completed: { type: Boolean, required: true, default: false }
  },
  {
    timestamps: true, toJSON: { virtuals: true }
  }
)

MissionSchema.virtual('location', {
  ref: 'Location',
  localField: 'locationId',
  foreignField: '_id',
  justOne: true
})

MissionSchema.virtual('rat', {
  ref: 'Rat',
  localField: 'ratId',
  foreignField: '_id',
  justOne: true,
  options: {
    select: 'callsign specialties'
  }
})