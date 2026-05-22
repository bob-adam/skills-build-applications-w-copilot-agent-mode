"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LeaderboardSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Types.ObjectId, ref: 'User', required: true },
    score: { type: Number, required: true },
    rank: { type: Number, required: true },
    week: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Leaderboard', LeaderboardSchema);
