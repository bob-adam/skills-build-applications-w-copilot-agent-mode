import { Schema, model, Types } from 'mongoose';

const LeaderboardSchema = new Schema({
  user: { type: Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
  week: { type: String, required: true }
});

export default model('Leaderboard', LeaderboardSchema);
