"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WorkoutSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: String,
    difficulty: { type: String, enum: ['easy', 'medium', 'hard'], default: 'medium' },
    duration: Number, // in minutes
    suggestedFor: [String]
});
exports.default = (0, mongoose_1.model)('Workout', WorkoutSchema);
