"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = exports.mongoUri = void 0;
exports.connectToDatabase = connectToDatabase;
exports.disconnectFromDatabase = disconnectFromDatabase;
const mongoose_1 = __importDefault(require("mongoose"));
const DEFAULT_MONGODB_URI = 'mongodb://127.0.0.1:27017/octofit_db';
exports.mongoUri = process.env.MONGODB_URI ?? DEFAULT_MONGODB_URI;
async function connectToDatabase() {
    if (mongoose_1.default.connection.readyState === 1) {
        return mongoose_1.default.connection;
    }
    await mongoose_1.default.connect(exports.mongoUri, {
        dbName: 'octofit_db',
    });
    return mongoose_1.default.connection;
}
async function disconnectFromDatabase() {
    if (mongoose_1.default.connection.readyState === 0) {
        return;
    }
    await mongoose_1.default.disconnect();
}
const connectDB = async () => {
    try {
        const conn = await connectToDatabase();
        console.log('MongoDB connected:', exports.mongoUri);
        return conn;
    }
    catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
};
exports.connectDB = connectDB;
exports.default = mongoose_1.default;
