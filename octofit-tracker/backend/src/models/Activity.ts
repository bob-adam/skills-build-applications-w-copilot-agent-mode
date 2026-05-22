import { Schema, model, Types } from 'mongoose';

const ActivitySchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  duration: { type: Number, required: true }, // in minutes
  calories: { type: Number },
  date: { type: Date, default: Date.now }
});

export default model('Activity', ActivitySchema);
