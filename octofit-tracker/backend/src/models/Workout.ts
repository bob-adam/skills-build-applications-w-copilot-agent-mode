import { Schema, model, Types } from 'mongoose';

const WorkoutSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
  duration: Number, // in minutes
  suggestedFor: [String]
});

export default model('Workout', WorkoutSchema);
