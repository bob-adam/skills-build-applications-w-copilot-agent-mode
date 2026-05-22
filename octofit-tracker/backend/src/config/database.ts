import mongoose from 'mongoose';

const DEFAULT_MONGODB_URI = 'mongodb://127.0.0.1:27017/octofit_db';

export const mongoUri = process.env.MONGODB_URI ?? DEFAULT_MONGODB_URI;

export async function connectToDatabase() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  await mongoose.connect(mongoUri, {
    dbName: 'octofit_db',
  });

  return mongoose.connection;
}

export async function disconnectFromDatabase() {
  if (mongoose.connection.readyState === 0) {
    return;
  }

  await mongoose.disconnect();
}
