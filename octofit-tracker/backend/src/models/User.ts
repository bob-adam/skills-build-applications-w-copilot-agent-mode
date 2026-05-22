import { Schema, model, Types } from 'mongoose';

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  team: { type: Types.ObjectId, ref: 'Team' },
  profile: {
    age: Number,
    gender: String,
    height: Number,
    weight: Number
  }
});

export default model('User', UserSchema);
