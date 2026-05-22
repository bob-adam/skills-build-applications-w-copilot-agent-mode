import { Schema, model, Types } from 'mongoose';

const TeamSchema = new Schema({
  name: { type: String, required: true, unique: true },
  members: [{ type: Types.ObjectId, ref: 'User' }],
  createdAt: { type: Date, default: Date.now }
});

export default model('Team', TeamSchema);
