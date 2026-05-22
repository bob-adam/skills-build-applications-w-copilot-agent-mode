"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/octofit_db';
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(mongoUri);
        console.log('MongoDB connected:', mongoUri);
    }
    catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
exports.default = mongoose_1.default;
